import React from "react"
import Layout from "../components/Layout"
import recipes from "../data/recipes"

export default function Recipes() {
  const recipeLink = recipe => {
    return (
      <li>
        <a href={recipe.link} target="_blank" rel="noreferrer noopener">
          {recipe.name}
        </a>
      </li>
    )
  }

  return (
    <Layout
      title="Recipes"
      description="A list of recipes I like to make."
      article={false}
    >
      <div className="collection">
        <h1>Recipes</h1>
        <p className="grey">{recipes.length} recipes</p>
        <p>
          I like to cook, and this is a collection of recipes that I like to
          make. Currently these are all links to the sites where I found them,
          but in the future I'll add some that are my own modifications or
          creations.
        </p>
        <h2>Vegetarian</h2>
        <ul>
          {recipes
            .filter(recipe => recipe.vegetarian === true)
            .map(recipe => {
              return recipeLink(recipe)
            })}
        </ul>
        <h2>Non-Vegetarian</h2>
        <ul>
          {recipes
            .filter(recipe => recipe.vegetarian === false)
            .map(recipe => {
              return recipeLink(recipe)
            })}
        </ul>
      </div>
    </Layout>
  )
}
