---
title: "How to export Kobo highlights to Notion with Node and better-sqlite3"
date: "2021-11-07"
description: "Using the Notion API and better-sqlite3 to export Kobo highlights to Notion."
category: "strategies"
type: "post"
---

Ever since I started using my Kobo to read eBooks, I've had a minor problem &ndash; I like to highlight while I'm reading, but moving the highlights from my Kobo to my computer was tedious because I typed them up myself. Earlier this year, though, I found Alberto Pettarin's handy [export-kobo](https://github.com/pettarin/export-kobo) Python script, which allowed me to export my highlights to a text or `.csv` file.

Now that I'm using Notion to organize my reading library, I thought it would be worthwhile to write my own script in Node.js that would not only export all of my highlights but automatically update my Notion library database with them.

In this post, I'm going to walk you through how to write this script so that you can understand and modify it for your own purposes. If you'd rather just clone the repository and work it out yourself, you can find it [here](https://github.com/juliariec/export-kobo-to-notion/).

## A preliminary algorithm

The first step is to establish what we're trying to accomplish. I have a database in Notion called "Library" which includes books I've read or want to read, so my goal is to automate the export of Kobo highlights into that library database.

This is the algorithm I wrote for the script:

- Get a list of books from my Kobo that have highlights.
- Check each book in Notion to see if it already has its highlights uploaded.
- If it doesn't, retrieve the highlights and insert them into the Notion page, and then update the page to reflect the change.

I'm specifying highlights because I don't use the annotation feature on my Kobo. It's possible this script works with those too, but they're not of interest to me so I'm disregarding them. Off we go!

## Getting set up

Make a new folder on your computer, and then type the `npm init` command to create a `package.json` file for the project (I called mine "export-kobo-to-notion"). For this project, we're going to use the following modules:

- [dotenv](https://github.com/motdotla/dotenv) to manage our environment variables
- Notion's [JavaScript SDK](https://github.com/makenotion/notion-sdk-js) to make API calls
- [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3) to read the Kobo database (which is stored as a `.sqlite` file)

You can install these modules with this command:

```javascript
npm install dotenv @notionhq/client better-sqlite3
```

Once the modules have been installed, you should also create a file called `.env` in the directory &ndash; this is where you'll store the private environment variables you need for your script to work.

### Creating a Notion integration

Developers need to create a Notion integration before they can use the Notion API. Notion explains the full steps [here](https://developers.notion.com/docs) &ndash; all you have to do is go to your [integrations](https://www.notion.so/my-integrations) and create a new integration (I called mine "Kobo Export").

Once you have the integration, you should save its associated token as the `NOTION_TOKEN` variable in your `.env` file, which will look something like this: `NOTION_TOKEN=secret_TY78iopwv` (but longer).

The next step is to give your integration permissions to modify your library database. Open the database in Notion, click "Share" (top right corner), and then select the "Kobo Export" integration.

You'll also need the library database ID, which you can find in the URL of the database page: the URL will have a 32 digit ID located between your workspace name and the `?` symbol: it will look something like `https://www.notion.so/username/776yv4nanf6qx0bdttznd9upfljupb11?v=s9...`, where the ID is `776yv4nanf6qx0bdttznd9upfljupb11`. Copy the database ID and save it in your `.env` file as `NOTION_DATABASE_ID`.

Your `.env` file should now look like this:

```
NOTION_TOKEN=secret_TY78iopwv
NOTION_DATABASE_ID=776yv4nanf6qx0bdttznd9upfljupb11
```

### Connecting to Notion

Create a file called `index.js` in your repository, which is where we'll write the code for the script. First, we want to use the **dotenv** module to read the variables from our `.env` file. Next, we want to initialize our Notion SDK client with our integration token so that we have authorization to make API calls. This is what our script will start with:

```javascript
require("dotenv").config()
const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env
const { Client } = require("@notionhq/client")
const notion = new Client({ auth: NOTION_TOKEN })
```

I always like to confirm that what I've done is working before I move onto the next step; it helps me to debug when things go wrong. We can check that our Notion database is properly connected by querying for a page we know is in our library database (in my case, it's the book "Circe") with the following code:

```javascript
async function exportHighlights() {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: "Title",
      rich_text: {
        equals: "Circe",
      },
    },
  })
  console.log(response)
}

exportHighlights()
```

If you'd like to write a different database query, the documentation for queries is [here](https://developers.notion.com/reference/post-database-query). After running this code (with the command `node index.js`), you should see a "page" object printed out in the console; if you don't, something is wrong. Once you've confirmed that the Notion database connection is working, delete this code before moving on.

### Reading the Kobo database file

When you connect your Kobo to your computer, you should see a file in the `.kobo` folder called `KoboReader.sqlite`. This file is where Kobo stores all of the highlights and annotations made on your device. Copy (don't move!) this file into your project repository &ndash; I renamed mine `highlights.sqlite`.

**Aside**: if you're curious about what the data in this file looks like, you can download a program called [DB Browser for SQLite](https://sqlitebrowser.org/) to explore it more thoroughly.

We can initialize our Kobo database connection by adding the following line underneath the Notion initialization:

```javascript
const db = require("better-sqlite3")("highlights.sqlite")
```

Using this library, we can write queries to retrieve information from our Kobo database. Like before, we can check that everything is working by adding the following code to `index.js` and then running the script again. (Replace "Circe" with the title of a book that's on your Kobo).

```javascript
const result = db
  .prepare("SELECT Attribution AS Author FROM content WHERE Title = 'Circe'")
  .get()
console.log(result)
```

If the console shows the author of the book, everything is working as expected and you can delete those two lines of code. Now, for the fun part: actually writing the script!

## Writing the script

Since we wrote a preliminary algorithm at the beginning, we have a general idea of the steps we'll take to write our script. First of all, we'll want to write everything in an async function called `exportHighlights`, because our Notion API calls will be asynchronous. (If you don't know what that means, Mozilla's [documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) on asynchronous code is worth a read!)

### Step 1: get a list of books that have highlights

We'll start with querying our Kobo database for all of the books that have highlights. (This and the following query were both taken from Alberto Pettarin's original [Python script](https://github.com/pettarin/export-kobo) and modified slightly.)

Here's what that looks like:

```javascript
async function exportHighlights() {
  const getBookListQuery =
    "SELECT DISTINCT content.ContentId, content.Title, content.Attribution " +
    "FROM Bookmark INNER JOIN content " +
    "ON Bookmark.VolumeID = content.ContentID " +
    "ORDER BY content.Title"
  const bookList = db.prepare(getBookListQuery).all()
}
```

If you add `console.log(bookList)`, you should see a list of objects which look something like this:

```javascript
{
  ContentID: 'file:///mnt/onboard/Digital Editions/Circe.epub',
  Title: 'Circe',
  Attribution: 'Madeline Miller'
}
```

We technically only need `ContentID` and `Title`, but I've included `Attribution` (which is the author) in the query because it helps me identify the book.

### Step 2: check to see if the book's highlights have already been uploaded

Now, we want to loop through our book list and see if it already has highlights uploaded by looking at the "Highlights" checkbox property.

**Aside**: before we proceed with checking Notion, there's another small issue I want to consider &ndash; subtitles. It's common for non-fiction books to have a short title followed by a long subtitle, usually separated with a colon &mdash; like _The Biggest Bluff: How I Learned to Pay Attention, Master Myself, and Win_. Since I often shorten the book title by removing the subtitle, I've added a few lines of code that will do the same &ndash; this should increase the chances of matching a Kobo book to a Notion book.

```javascript
for (book of bookList) {
  try {
    // Removes subtitles from book title
    if (book.Title.indexOf(":") !== -1) {
      book.Title = book.Title.substring(0, book.Title.indexOf(":"))
    }
    let title = book.Title

    // Check Notion database for the book
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          { property: "Title", text: { contains: title } },
          { property: "Highlights", checkbox: { equals: false } },
        ],
      },
    })

    // Use the results to determine status of the book
    var valid = false
    if (response.results.length === 1) {
      valid = true
    } else if (response.results.length > 1) {
      console.log(`${title} matched multiple items.`)
    } else {
      console.log(`${title} was skipped.`)
    }
  } catch (error) {
    console.log(`Error with ${book.Title}: `, error)
  }
}
```

Because of the title/subtitle problem, we're not checking that the Notion database **matches** the title but that it **contains** it (we want _The Biggest Bluff_ to match _The Biggest Bluff: How I Learned to Pay Attention, Master Myself, and Win_). Since multiple books could hypothetically contain the same title, it's worth doing a check of `response.results.length` and making sure that we only proceed if our search returns one result.

### Step 3: upload the highlights and update the book page

Once we've determined that the book exists in the Notion library database and that it hasn't already had its highlights uploaded, we can retrieve the highlights from the Kobo database, upload them to the book page, and update its "Highlights" property. This is what that looks like:

```javascript
if (valid) {
  const pageId = response.results[0].id
  var blocks = []

  // Retrieves highlights for the book
  const getHighlightsQuery =
    "SELECT Bookmark.Text FROM Bookmark " +
    "INNER JOIN content ON Bookmark.VolumeID = content.ContentID " +
    "WHERE content.ContentID = ? " +
    "ORDER BY content.DateCreated DESC"
  const highlightsList = db.prepare(getHighlightsQuery).all(book.ContentID)

  // Starts with a block for the heading
  blocks.push({
    object: "block",
    type: "heading_1",
    heading_1: {
      text: [{ type: "text", text: { content: "Highlights" } }],
    },
  })

  // Generates a text block for each highlight
  for (highlight of highlightsList) {
    if (highlight.Text !== null) {
      blocks.push({
        object: "block",
        type: "paragraph",
        paragraph: {
          text: [{ type: "text", text: { content: highlight.Text } }],
        },
      })
    }
  }

  // Appends the blocks to the book page
  await notion.blocks.children.append({
    block_id: pageId,
    children: blocks,
  })

  // Updates the status of the book page
  await notion.pages.update({
    page_id: pageId,
    properties: { Highlights: { checkbox: true } },
  })

  console.log(`Uploaded highlights for ${title}.`)
}
```

In this step, we've used the Notion API reference to [construct](https://developers.notion.com/reference/block) block objects, [append](https://developers.notion.com/reference/patch-block-children) them to the page, and then [update](https://developers.notion.com/reference/patch-page) its properties.

## Putting it all together

Now that our script is finished, it should look something like this:

```javascript
require("dotenv").config()
const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env
const { Client } = require("@notionhq/client")
const notion = new Client({ auth: NOTION_TOKEN })
const db = require("better-sqlite3")("highlights.sqlite")

async function exportHighlights() {
  const getBookListQuery =
    "SELECT DISTINCT content.ContentId, content.Title, content.Attribution " +
    "FROM Bookmark INNER JOIN content " +
    "ON Bookmark.VolumeID = content.ContentID " +
    "ORDER BY content.Title"
  const bookList = db.prepare(getBookListQuery).all()

  for (book of bookList) {
    try {
      // Removes subtitles from book title
      if (book.Title.indexOf(":") !== -1) {
        book.Title = book.Title.substring(0, book.Title.indexOf(":"))
      }
      let title = book.Title

      // Check Notion database for the book
      const response = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
        filter: {
          and: [
            { property: "Title", text: { contains: title } },
            { property: "Highlights", checkbox: { equals: false } },
          ],
        },
      })

      // Use the results to determine status of the book
      var valid = false
      if (response.results.length === 1) {
        valid = true
      } else if (response.results.length > 1) {
        console.log(`${title} matched multiple items.`)
      } else {
        console.log(`${title} was skipped.`)
      }

      if (valid) {
        const pageId = response.results[0].id
        var blocks = []

        // Retrieves highlights for the book
        const getHighlightsQuery =
          "SELECT Bookmark.Text FROM Bookmark " +
          "INNER JOIN content ON Bookmark.VolumeID = content.ContentID " +
          "WHERE content.ContentID = ? " +
          "ORDER BY content.DateCreated DESC"
        const highlightsList = db
          .prepare(getHighlightsQuery)
          .all(book.ContentID)

        // Starts with a block for the heading
        blocks.push({
          object: "block",
          type: "heading_1",
          heading_1: {
            text: [{ type: "text", text: { content: "Highlights" } }],
          },
        })

        // Generates a text block for each highlight
        for (highlight of highlightsList) {
          if (highlight.Text !== null) {
            blocks.push({
              object: "block",
              type: "paragraph",
              paragraph: {
                text: [{ type: "text", text: { content: highlight.Text } }],
              },
            })
          }
        }

        // Appends the blocks to the book page
        await notion.blocks.children.append({
          block_id: pageId,
          children: blocks,
        })

        // Updates the status of the book page
        await notion.pages.update({
          page_id: pageId,
          properties: { Highlights: { checkbox: true } },
        })

        console.log(`Uploaded highlights for ${title}.`)
      }
    } catch (error) {
      console.log(`Error with ${book.Title}: `, error)
    }
  }
}

exportHighlights()
```

After you run the final version, you should see all your highlights added to your Notion library pages and their properties updated. The next time you run it, it will skip all of the books it's already processed!

Since everyone's Notion setup is a little bit different, you'll probably want to make some adjustments to this code, like renaming the book properties, querying for extra information, or refining the matching algorithm. Regardless, I hope that this post has been a helpful place to start, and that you can use it to simplify your own workflow.

You can view this repository on [GitHub](https://github.com/juliariec/export-kobo-to-notion/), and please feel free to add a comment or open an issue if you have any questions or feedback.
