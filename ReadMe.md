# ShaRecipe API server

## Description

ShaRecipe (Share Recipe) is an app that allow user to not only view a wide range of curated recipe but also create their own recipe (shareble recipe).

Every recipe created by the user will generate a code (shareable code) which the user can share with their friends and family.

If an user have a code, they can enter the code to get the recipe.

Creating a new recipe or getting a shareable recipe will require network connection. However, once the user fetched/created the shareable recipe, those recipes will be avalible offline.

User can manage their local recipe library by removing unwanted recipe or clear everything.

This is a part of the UTS IOS development assignment 3

## Linked repo

- ShareRecipe App: https://github.com/Mike0298/UTS-IOS-ShaRecipe
- ShaRecipe API server: https://github.com/Mike0298/UTS-IOS-ShaRecipe-API

## Usage

### Requirement:

- Node.JS installed on your local machine

### On first installation or after an update:

> Open terminal in the project directory and perform this command

```
npm install
```

### After installation:

> To run the server in developement mode (locally)

```
npm run server
```

> To terminate the server

```
Ctrl + C
```

## Routes

Unless specify otherwise, all routes start in http://localhost:5000/api or https://sharecipe.onrender.com/api

POST request also require an additional header:
`Content-Type: application/json`

> Route to get all shareable recipe (for assigment marking/presentation)

```
GET /shareable
```

This will return all user created recipes
