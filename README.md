# Project Overview

## Charcuter-Cheese

[Deployed Site](https://60c7723a8b47cac7187166bb--youthful-sinoussi-d88238.netlify.app/)

## Project Description

A place for charcuterie lovers to find perfect pairings for their boards! This application is an easy to use hub for users to find information on their favorite cheeses and their pairing. Users can see a variety of their favorite cheeses and spreads, as well as being able to add a suggestion for what they would like to see theat they did not find on the website.

## Wireframes

[Homepage](https://wireframe.cc/3MkkDx)

[Cheese info](https://wireframe.cc/3aq4xn)

[User Opinions](https://wireframe.cc/O7GnRl)

## Component Hierarchy

[Hierarchy Link](https://whimsical.com/4QYvqQwrg3rCWefq4NB7FW)

## API and Data Sample

Cheese endpoint:

```json
{
  "records": [
    {
      "id": "recvyCxOZe1Bdmb1T",
      "fields": {
        "name": "Gouda",
        "flavor": "Sweeter and Nutty",
        "type": "Semi-Soft, Semi-Hard, or Hard"
      },
      "createdTime": "2021-06-06T19:20:43.000Z"
    },
    {
      "id": "recSBbteQfpKAApBc",
      "fields": {
        "sweetOrSavory": "Apple Butter, Fruit Slices",
        "name": "Cheddar",
        "flavor": "Earthy/Nutty and Sharp ",
        "meat": "Calabrese, Soppresata",
        "type": "Hard"
      },
      "createdTime": "2021-06-06T19:20:43.000Z"
    },
    {
      "id": "recNVs6pVTpU6krri",
      "fields": {
        "name": "Gruyere",
        "flavor": "Earthy/Nutty and Sweet",
        "type": "Alpine"
      },
      "createdTime": "2021-06-06T19:20:43.000Z"
    }
  ],
  "offset": "recNVs6pVTpU6krri"
}
```

User Opinions endpoint:

```json
{
  "records": [
    {
      "id": "recUM6ZnkfzXFyleZ",
      "fields": {
        "name": "Anonymous",
        "input": "Love gouda! you should plate it with honey!"
      },
      "createdTime": "2021-06-07T15:53:41.000Z"
    }
  ],
  "offset": "recEEvzVoZlvZzUZY"
}
```

### MVP/PostMVP

#### MVP

- use two airtable endpoints, one for cheese data and another for user input.
- have a creation form section for user suggestions on charcuterie bord construction
- have at least three different Views/Routes

#### PostMVP

- utilize three.js
- make cheese loading icons

## Project Schedule

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| June 5-6   | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| June 7     | Project Approval                                   | Complete   |
| June 8     | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| June 9     | Any Pseudocode / Actual Code                       | Complete   |
| June 10    | Initial Clickable Model                            | Complete   |
| June 11    | MVP                                                | Complete   |
| June 12-13 | CSS Finalization                                   | Complete   |
| June 14    | Presentations                                      | Incomplete |

## Timeframes

| Component                                             | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Approval                                      |    H     |       2        |       1       |      1      |
| Download Dependencies                                 |    H     |       .5       |      .5       |     .5      |
| Create Comonents/Folders                              |    H     |       1        |       1       |      1      |
| Pseudo Code                                           |    H     |       1        |       1       |      1      |
| Base Code Layout                                      |    H     |       2        |       2       |      2      |
| Api Set Up/test                                       |    H     |      2.5       |      2.5      |     2.5     |
| Code For Homepage                                     |    H     |      3.5       |       1       |      1      |
| Code For Info Page                                    |    H     |      3.5       |       4       |      4      |
| Code For User Opinion                                 |    H     |      3.5       |       4       |      4      |
| Have Clickable Model                                  |    H     |       2        |       2       |      2      |
| Import Different Components And console.log() To Test |    H     |       1        |      1.5      |     1.5     |
| Render Content On Screen For Each Page                |    H     |       4        |       4       |      4      |
| Link Pages And Test Them                              |    H     |      2.5       |      2.5      |     2.5     |
| CSS Structure                                         |    H     |       3        |       3       |      3      |
| CSS Images                                            |    H     |       1        |       3       |      3      |
| CSS Rough Draft                                       |    H     |       3        |       3       |      3      |
| CSS Final Touches                                     |    H     |       4        |       6       |      6      |
| Clean Up Code And Warnings                            |    H     |       3        |      1.5      |     1.5     |
| Attempt PMVPs                                         |    H     |       4        |      1.5      |     1.5     |
| Total                                                 |    H     |     47hrs      |     43hrs     |    43hrs    |

## SWOT Analysis

### Strengths:

I know exactly what i want my application to look like/want it to do. I can plan well for what needs to be done/how long it will take.

### Weaknesses:

At times Linking up can confuse me, as well as styling within react; styling is fairly easier for me in comparison to JS but going between different files can throw me off guard a little bit.

### Opportunities:

This project will give me the chance to let my understanding of react really sink in. I also am hoping to look a little into three.js during this project to see what I may be able to do in this project, or how I may be able to utilize it in future projects.

### Threats:

I tend to doubt that I know answers to my problems even when I really do. I can tend to freeze up a bit because I don't want to get it wrong, but need to try it and fail because most of the time I do know answers.
