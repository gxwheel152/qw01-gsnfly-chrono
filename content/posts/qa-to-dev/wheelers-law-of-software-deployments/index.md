---
title: "Wheeler's Law of Software Deployments to Test Regions Or Why Most Testing Starts are Delayed between 4 and 24 Business Hours"
cover: ./luke-bender-2jqtZ-wf45Q-unsplash.jpg
date: 2020-05-21
author: 'Gardner W.'
slug: qa-to-dev/wheelers-law-of-software-deployments
description: 'Is the Environment Really Ready or why it takes many, many hours to start actual testing '
tags:
  - 'qa-to-dev'
  - 'software deployments'
  - 'qa on the hot seat'
  - 'deadlines'
draft: false
hide: false
---

> Photo by [Luke Bender](https://unsplash.com/@lukebender) - [Sipping Margaritas Somewhere Amazing](https://unsplash.com/photos/2jqtZ-wf45Q)

## So Many Laws, So Little Time Until Our Go-Live Date

I am not sure what law of the universe this is, or if it has a name, but it is universal. 
 - [Murphy](https://en.wikipedia.org/wiki/Murphy%27s_law) has a law
 - [Pavlov](https://en.wikipedia.org/wiki/Classical_conditioning) has his dogs
 - [Moore made a prediction](https://en.wikipedia.org/wiki/Moore%27s_law), which became a law
 - Apparently a [lot of other people](https://en.wikipedia.org/wiki/List_of_eponymous_laws) have laws as well

## Wheeler's Law 

Maybe I'll call this Wheeler's Law, which is really just an instantiation of Murphy's law with special methods and wrappers that apply to software development teams -- if anything can go wrong with a deployment to a test region, it will. This will specifically delay software testing by an average minimum of 4 business hours and average maximum of 24 business hours. That's 3 days for those keeping score at home. 

> And, no matter what, it will be the QA team's fault. 

To quote the TV detective [Adrian Monk](https://en.wikipedia.org/wiki/Adrian_Monk), 
 - We don't know how QA did it, i.e., caused all these delays, but we know QA did it 
 - We also don't know why QA did it, but we know QA did it 

Who might say this, you ask? All of the following people: the devs, the pm's, the executives, the business reps, as well as casual folks at a water cooler near any of the aforementioned folks. 

You may laugh at the last aspect of Wheeler's law of software deployments to test regions, but this is how it will be summarized in management meetings. 

> We had delays in QA, that the QA team is now trying to make up by working through the weekend. Don't worry they don't mind. They are team players. 

## Devs to the Rescue - Sort of 

The devs don't stand up at this point and say --- well, to be fair, there were some "hiccups" in the software deployment to the test region that involved us as well, so it's really not a QA delay per say, but rather a delay and added pressure on the deadline caused by the following types of factors:

 - oops, forgot to deploy a database change to that region (2 hrs delay) 
 - oops, forgot to change the properties file in that region (1.25 hr delay) 
 - oops, didn't check in the batch file code (2.5 hr delay) 
 - oh crap, someone deleted the history tables (4.5 hour delay) 
 - oops, the server needs a reboot after deployment (3.5 hour delay) 
 - oh know, some security settings have changed, and the security team wasn't notified that they also apply to the test region (6-7 hr delay)
 - oops, it doesn't work on existing customer records until we run an update job (3.5 hour delay)
 - oops, so and so also had to deploy their code, so my code doesn't work right now (5 hour delay) 

Devs everywhere will be horrified at these delay times. They will cry that they are bloated, pulled out of left field, overstated, biased, etc. 

> Don't worry, I'll explain

## Why Hindrances are so hindering

Devs must remember that the delay times include some of these "minor" facts of life in software development: 
 - the time it took QA to find the problem
 - the time it took QA to report the problem 
 - the time it took to have the dev manager yell at QA for something or the other
 - the time it took for the dev to learn of the problem, including time allotted for 
   - coffee breaks
   - chats with colleagues 
   - responding to subreddits and stackoverflow questions 
   - recognizing they have a problem in their queue
   - the time it takes the Dev to fix the problem (5 minutes)
 - the time it takes to notify database, deployment, integration, environment, etc. people of the required change
 - the time it takes for those teams to respond and hit their associated buttons or run the requested jobs (another 5 minutes for hitting the button)
 - the time it takes to notify the QA team
 - the time it takes to re-start the test from scratch b/c you're test data is all shot to hell and useless at this point
 - the time it takes the QA team to write an extensive email to the pm's and or execs about the delay that "QA caused" and the mitigation strategies, explaining that we're really not in "yellow" status because of this delay, because the QA team will naturally be working the weekend to help mitigate the risk they caused by this delay
 - the time it takes to repeatedly write the phrase "the time it takes" 

## Some Devs are Rock Stars, Others Drink Margaritas like Rock Stars after the Victory of Dev Complete is Declared
Now, most devs I've met will not even acknowledge that Wheeler's Law of software deployments to test regions exists, which is generally why they don't come to QA's rescue when execs, managers, and pm's are grilling QA about all of the QA delays. 

Those devs who do, must be remembered as the rock stars they are. I know they are rock stars because I have the ticket stubs from their last rock concerts to prove it.

 Most devs on the other hand have been "Dev Complete" and sipping margaritas on a beach or at another beautiful location for so long they don't even remember there's a project going on. 

> But what the hell does Dev Complete mean anyway is not our topic for today's discussion

If a dev acknowledges the existence of Wheeler's Law of software deployments to test regions they will describe it as a small, minor, diminutive, miniscule, pretty much dismissible annoyance that QA is getting too worked up about. 

Why, you ask, do they do this --- b/c it only took 5 minutes to fix, so what the hell are you complaining about. 
