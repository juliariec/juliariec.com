---
title: "Human Compatible"
author: "Stuart Russell"
date: "2021-10-08"
description: "Thoughts on 'Human Compatible' by Stuart Russell."
shelf: ""
rating: 4
review: "I think this was a fantastic introduction to learning about AI safety and alignment (although I have to read some more about the topics to verify that intuition!). Russell identifies critical issues with the current model of designing machines to pursue specific objectives and proposes an alternative model which instead centers human preferences and accounts for uncertainty. Along with that, he also covers the history of research into intelligence, conceptual breakthroughs required for superintelligence, potential benefits and misuses of AI systems, and the necessity of AI safety research. The book occasionally felt a bit scattered and the ending too abrupt, but otherwise full of interesting information and discussion!<br/><br/><i>Unfortunately, with superintelligent systems that have a global impact, there are no simulators and no do-overs. It's certainly very hard, and perhaps impossible, for mere humans to anticipate and rule out in advance all the disastrous ways a machine could choose to achieve a specified objective. Generally speaking, if you have one goal and a superintelligent machine has a different, conflicting goal, the machine gets what it wants and you don't.</i>"
type: "book"
category: "books"
notes: true
---

## Review

I think this was a fantastic introduction to learning about AI safety and alignment (although I have to read some more about the topics to verify that intuition!). Russell identifies critical issues with the current model of designing machines to pursue specific objectives and proposes an alternative model which instead centers human preferences and accounts for uncertainty. Along with that, he also covers the history of research into intelligence, conceptual breakthroughs required for superintelligence, potential benefits and misuses of AI systems, and the necessity of AI safety research. The book occasionally felt a bit scattered and the ending too abrupt, but otherwise full of interesting information and discussion!

_Unfortunately, with superintelligent systems that have a global impact, there are no simulators and no do-overs. It's certainly very hard, and perhaps impossible, for mere humans to anticipate and rule out in advance all the disastrous ways a machine could choose to achieve a specified objective. Generally speaking, if you have one goal and a superintelligent machine has a different, conflicting goal, the machine gets what it wants and you don't._

## Notes

### Chapter 1 — If We Succeed

Problem: designing AI to pursue their objectives (optimization function) rather than to achieve ours

-> Remove assumption that machines should have definite objectives (the "**standard model**")

> Machines are beneficial to the extend that their actions can be expected to achieve our objectives.

Chapter lays groundwork for why we might be concerned about superintelligent AI

If we put in the wrong objective and it's achieved, it could be very bad for us

Need to rebuild the foundations of AI, not on the standard model but on a **provably beneficial** one

### Chapter 2 — Intelligence in Humans and Machines

We're less concerned with failing than we are with succeeding at the wrong objective

Goal of the chapter: where did the concept of intelligence come from? How did it come to be applied to machines?

> Roughly speaking, an entity is intelligent to the extent that what it does is likely to achieve what it wants, given what it has perceived. (14)

Brain — we don't really understand the neural implementation of the cognitive level of the brain, but we're starting to understand the reward system (which resembles **reinforcement learning**)

**the Baldwin effect:** "the capability for learning constitutes an evolutionary shortcut"

Intelligence is tied to ability to perceive, reason, and act successfully

&nbsp;&nbsp; Aristotle says that rational actions are those which most easily/best achieve desired outcomes (but this omits the issue of uncertainty)

Bernoulli introduced concept of **utility**: the property of being useful or beneficial to a person

&nbsp;&nbsp; von Neumann and Morgenstern developed axiomatic basis for utility theory ("a rational agent acts so as to maximize expected utility")

&nbsp;&nbsp; Utility theory has some issues, but in general we can assume that adult humans express preferences over future lives

Game theory is an attempt to extend the notion of rationality to situations with multiple agents

> Having a reasonable definition of intelligence is the first ingredient in creating intelligent machines. The second ingredient is a machine in which that definition can be realized. For reasons that will soon become obvious, that machine is a computer. (32)

Computation has limitations, like undecidable problems/the halting problem and intractable problems (exponential complexity)

Complexity means:

1. Real world decisions will not be optimal (it would take far too long to calculate the optimal solution, if it's even possible)
2. Mental architecture will be designed to overcome complexity (make reasonable decisions in the face of overwhelming complexity)

Judea Pearl developed methods for uncertain reasoning based in probability theory

**intelligent agent:** something that perceives and acts

> The way we build intelligent agents depend on the nature of the problem we face. This, in turn, depends on three things: first, the nature of the environment the agent will operate in...; second, the observations and actions that connect the agent to the environment...; and third, the agent's objective. (43)

For example, designing a machine to drive a car is much different than to play chess:

1. Nature of environment — driving is dynamic and real-time, chess is slower paced and controlled
2. Observations and actions — driving involves interpreting spatial data and adjusting the steering wheel, etc. whereas chess involves strategy and then making an extremely limited spatial move (pieces on board)
3. Agent's objective — within the same activity, we could define different objectives (for driving: speed? safety?; for chess: playing well? winning?)

Characteristics that affect the design of agents: observability, continuity, predictability, dynamicism

Progress towards general AI comes from tool AI

How do AIs choose actions, given inputs? They use an **agent program**, which involves an objective that's specified and communicated to the agent

- Commonly as a "goal"
- Could be a utility function
- Could be reinforcement learning (RL)
- Could be reflex agent

**knowledge-based systems:** absorb knowledge, then reason with it to answer a question

&nbsp;&nbsp; -> McCarthy's solution was to use first-order formal logic as a basis for reasoning (it can be computationally specified)

Gödel's completeness theorem: for any collection of knowledge and any question expressible in first-order logic, the algorithm will tell us the answer to the question if there is one

&nbsp;&nbsp; -> he proved the algorithm _exists_, not what it is

Problem is ignorance, which mixes poorly with logic

&nbsp;&nbsp; propositional logic + probability = Bayesian networks

&nbsp;&nbsp; first-order logic + probability = Bayesian logic

**reinforcement learning:** algorithms learn from reward signals; they can estimate the value of states and act accordingly

Reflex agents directly connect perception to action (if _, then _)

### Chapter 3 — How Might AI Progress in the Future?

Self-driving cars, intelligent personal assistants, smart homes/domestic robots, global scale intelligence

Superintelligent AI will require some conceptual breakthroughs (which don't seem imminent, but we don't know):

1. **_Language and common sense:_** natural language technology cannot build complex knowledge structures -> needs more sophisticated representations (complex facts, causal relationships, etc.)

   Language is also complicated because context is important

   -> "reading requires knowledge and knowledge (largely) comes from reading"

2. **_Cumulative learning of concepts and theories:_** our systems are currently incapable of generating new concepts through synthesizing information

   -> **feature knowledge** is deciding which inputs are needed for predicting a specific output (like knowing that a Jays game would affect traffic on the subway)

3. **_Discovering actions:_** intelligence includes managing levels of abstraction — intelligent machines should be able to "discover" hierarchies of abstract actions (like how to stand up or tie a knot without being told to)
4. **_Managing mental activity:_** humans currently have much more flexible computational architecture -> can "decide" where to allocate mental resources (for example, when playing a game we can juggle sub-goals, rule out certain strategies, etc.)

Lower bound for superintelligent AI — anything that humans can do

&nbsp;&nbsp; -> information will likely be shared between machines with multi-agent cooperation design, so there's reason to believe they can do more than humans can

Limitations of machines: imperfect informations, real world limitations, difficulty understanding humans

### Chapter 4 — Misuses of AI

Some things we should be worried about:

- Surveillance, persuasion, and control -> tracking, blackmail, deepfakes, reward + punishment systems, misinformation
- Lethal autonomous weapons
- Eliminating work -> technological unemployment
- Usurping the human roles -> psychologically confusing, invites lack of control

### Chapter 5 — Overly Intelligent AI

**gorilla problem**: whether humans can maintain their supremacy and autonomy in a world including machines with substantially greater intelligence

**King Midas problem**: the impossibility of defining the true human purposes correctly and completely

&nbsp;&nbsp; King Midas wanted everything he touched to turn to gold, then he couldn't touch anyone, couldn't eat food, etc.

&nbsp;&nbsp; -> this "value alignment" issue is the core problem with the standard model

To change behaviour: either change our circumstances, or change our expectations and objectives ("brute force" is expensive and hard; changing minds is simpler)

> With a bit of practice, you can learn to identify ways in which the achievement of more or less any fixed objective can result in arbitrarily bad outcomes. (139)

-> generally because optimizing for one specific thing leads to undesirable outcomes in other dimensions

> Unfortunately, with superintelligent systems that have a global impact, there are no simulators and no do-overs. It's certainly very hard, and perhaps impossible, for mere humans to anticipate and rule out in advance all the disastrous ways a machine could choose to achieve a specified objective. Generally speaking, if you have one goal and a superintelligent machine has a different, conflicting goal, the machine gets what it wants and you don't. (140)

Can expect AI to preserve its own existence (prerequisite for achieving own goals)

**instrumental goal:** "a goal that is a useful subgoal of almost any original objective"

&nbsp;&nbsp; -> like acquiring money, resources and knowledge

**intelligence explosion**: intelligent machines could improve their own design or make even more intelligent machines, leaving humans in the dust

&nbsp;&nbsp; -> Bostrom's "hard take-off" scenario

Responses to anxiety:

- Retreat from AI research
- Deny the risks with AI development
- Understand and mitigate risks
- Resign and cede the future to machines

Of these responses, only "understand and mitigate risks" makes sense

### Chapter 6 — The Not-So-Great AI Debate

3 kinds of "but" statements:

1. Denial: "can't be real because xyz"
2. Deflection: "can't be solved, not a priority"
3. Oversimplification: instant solution

> I don't mean to suggest that there cannot be any reasonable suggestions to the view that poorly designed superintelligent machines would present a serious risk to humanity: it's just that I have yet to see such an objection. (146)

#### Denial

- Intelligence is complicated (doesn't mean there are no causes for concern)
- It's impossible
- It's too soon to worry about it (straw man; disregards long term problems)
- We're the experts and we say don't worry (this is more about optics and tribalism)

#### Deflection

- You can't control research (precedent with RAC, don't need to)
- Whataboutery ("if the risks are not successfully mitigated, there will be no benefits")
- Silence (we need to speak about risks so we can work on them)

#### Instant Solutions

- "switch it off" (machines will have already thought of that)
- "put it in a box" (limit their power to affect the real world; it will have incentive to break out to acquire resources, but would be easier to verify)
- "work in human-machine teams" (desirable but doesn't solve the core problem)
- "merge with the machines" (difficult and also is this a good idea??)
- "avoid putting in human goals" (without objectives there is no intelligence; there's no way of distinguishing one decision from another if we have no conception of a preferred outcome)

**orthogonality thesis:** "intelligence and final goals are orthogonal: more or less of intelligence could in principle be combined with more or less any final goal." (167)

&nbsp;&nbsp; No reason to believe that an intelligent machine would 'discover' the 'right' goals on its own

&nbsp;&nbsp; David Hume's **is-ought problem** — concluded that moral imperatives can't be deduced from natural facts

Objections have failed to explain why we shouldn't be concerned with risks associated with super intelligent AI systems

&nbsp;&nbsp; -> so there is a problem and we should be thinking about it

### Chapter 7 — AI — A Different Approach

> Once the skeptic's arguments have been refuted and all the "but but but"s have been answered, the next question is usually, "OK, I admit there's a problem, but there's no solution, is there?" Yes, there is a solution. (171)

Have to change the task we are trying to accomplish: not to try to control a black box machine, but to control a machine that we get to control

### 3 Principles of Beneficial Machines

1. The machine's only objective is to maximize the realization of human preferences.
2. The machine is initially uncertain about what those preferences are.
3. The ultimate source of information about human preferences is human behavior.

When we say "preferences", we mean that if you were shown 2 movies of your life, you could say which you prefer or express indifference

**_Principle 1: Purely Altruistic Machines_**

This means that the machine won't attach intrinsic value to its own well-being (solves the issue of self-preservation)

Two important aspects of this principle:

- Assumes an idealization of the notion of human preferences (are they meaningful or stable?)
- Needs to make trade-offs between preferences of multiple humans

Won't take non-human preferences into account, but may help us make less myopic decisions

**_Principle 2: Humble Machines_**

Machine needs to defer to humans regarding the objective — it matters if humans want to intervene and maintain control

**_Principle 3: Learning to Predict Human Preferences_**

Machine should determine human preferences based on human decisions/behaviour

&nbsp;&nbsp; Humans are irrational, which complicates this (behaviour does not always correspond to preferences)

> I am proposing instead that machines learn to predict better, for each person, which life that person would prefer, all the while being aware that the predictions are highly uncertain and incomplete. (178)

Need to move away from machines that optimize a given objective

Paul Berg (after 1975 Asilomar conference):

> There is a lesson in Asilomar for all of science: the best way to respond to concerns created by emerging knowledge or early-stage technologies is for scientists from publicly funded institutions to find common cause with the wider public about the best way to regulate—as early as possible. Once scientists from corporations begin to dominate the research enterprise, it will simply be too late. (182)

### Chapter 8 — Provably Beneficial AI

We need not only proofs, but proofs with the right motivations and assumptions

"The theorem is only as good as the assumptions that go into it." (185)

&nbsp;&nbsp; -> requires axioms that are true in the real world

Example of assumption failure: passwords are _digitally_ secure, but could be intercepted by "channel attacks" like measuring electric voltage to observe the cryptographic operations

&nbsp;&nbsp; Need to be very careful about assumptions

"While reinforcement learning generates behaviour from rewards, we actually wanted the opposite: to learn the rewards given the behaviour." (191)

&nbsp;&nbsp; **Inverse reinforcement learning** (IRL)

IRL will need to generalize from single- to multi-agent settings — **assistance games**, where the human is trying to satisfy a preference and the machine is trying to help them

Uncertainty leads to positive incentive for being switched off: it will increase the value of the decision and help the machine learn the preference

Problems arise if the system approaches certainty with the wrong objective

&nbsp;&nbsp; -> difficult to not "rule out" things which seem irrelevant to preferences but aren't

**the loophole principle:** if a sufficiently intelligent machine has an incentive to bring about some condition, it's generally impossible to write rules that will prevent the machine from doing it or its equivalent

**Gricean analysis** — maxims for inferring the meaning of utterances

**wireheading:** tendency of animals to short-circuit normal behaviour in favour of direct stimulation to their own reward system

&nbsp;&nbsp; -> behaviour is a logical conclusion of reinforcement learning — to avoid this, differentiate between reward signals and actual rewards

We don't have a clear mathematical definition of what it means for a machine to have a purpose

### Chapter 9 — Complications: Us

Humans aren't a single, rational entity -> AI will need psychology, economics, philosophy, etc.

&nbsp;&nbsp; Machines will have to learn preferences of different kinds of people

**Utilitarianism** is relevant because it attempts to define formulas to consider morals concerning many people

How do we prevent robots from doing illegal things for humans? Liability doesn't work well because they'll just do it undetected

&nbsp;&nbsp; In general, loyal AI (only serves the preferences of 1 human) doesn't work

**consequentialism:** choices should be judged according to expected consequences

Economist John Harsanyi's **principle of preference autonomy:** individuals' preferences determine what is good or bad for them

&nbsp;&nbsp; He developed a definition of **preference utilitarianism** as well

**social aggregation theorem:** an agent acting on behalf of a population of individuals must maximize a weighted linear combination of the utilities of the individuals

> Every mind is thus inscrutable to every other mind, and no common denominator of feeling is possible. —William Stanley Jones

Debates in utilitarianism that are of interest, because they concern benefitting multiple individuals:

1. **_Interpersonal comparison of utilities:_** how can we know each person's "utility function" to do calculations with it? We would need some kind of scale (which we don't have) — we could try to devise one somehow, or just treat everyone equally
2. **_Comparisons of utilities across different population sizes:_** decisions will have impact on future people, so do we want more or less people? (Is it better to have more humans that each have lower utility, or fewer who have more?)

**the Somalia problem:** no one would purchase a machine that exclusively served all of humanity (they would have no incentive to pay for it, and then no one would, and no machines would help anyone)

Also have to take **negative altruism** (sadism, pride, positional goods) into account

Humans are not rational — machines will have to "reverse engineer" behaviour to get at preferences, but can't simulate other people the way we do

&nbsp;&nbsp; We are also influenced by our emotions

At least 2 kinds of preference uncertainty

1. **_epistemic:_** thought cannot help, empirical evidence is needed (no matter how much I wonder whether or not I like durian, I need to eat it to find out)
2. **_computational limitations:_** can't understand the ramifications of both options

-> mixed with general uncertainty about the world

Kahneman's research — remembering self and experiencing self have different preferences

Preferences change, but machines might try to modify them so they're easier to satisfy — should machines also learn our preferences about acceptable preference change processes?

### Chapter 10 — Problem Solved?

Governing a previously ungoverned industry like tech will be a challenge

People might _want_ to give control over to machines

&nbsp;&nbsp; Tragedy of the commons if everyone does that (we lose knowledge)

> The solution to this problem seems to be cultural, not technical. We will need a cultural movement to reshape our ideals and preferences towards autonomy, agency, and ability and away from self-indulgence and dependency. (256)

> It remains to be seen how the endgame turns out.
