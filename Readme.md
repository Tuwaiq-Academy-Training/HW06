# Homework 06

## Data Modeling

you are required to design the schemas used for various products, you are not allowed to use online resource, only what you have learned from the mongoDB university basics course.

## Food Tracking Application

We need to build a mobile application that tracks how much each person ate during it's day, we need to save the following information about each person:

- Meals
- Content of the meal
- Calories of each food in the meal
- User's target calories
- Exersice's calories burnt

your task is to build the format for these informations as json files.

## In-House Repositories

you are tasked with building an in-house cloud version tracking system that is similar to github, we are mainly interested in the repository section, we need to be able to manage the following:

- Repositories for users only
- Pull requests (with their features) on each Repo
- Issues (with their features) on each Repo

Good Luck.

Sample Solution for another system:

```js
type message={
    id:'number',
    sender:'string',
    receiver:'string',
    message:'string',
}
// main database
{
    groups:[
        homeworks:[message],
        announcements:[message],
        q-and-a:[message],
        random-chatting:[message]
    ],
    private:[message]
}
```
