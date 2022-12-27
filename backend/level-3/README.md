# 🤖 Backend Level 3 Challenge

In the **Level 3 Challenge** for the _Backend_ path you'll interact with MongoDB, save some data and retrieve it using an ExpressJS app.

Before starting, make sure to rename the `.env.template` file available in the root folder into `.env` and change the `MONGOOSE_CONNECTION_STRING` value to your MongoDB Atlas connection string, or your local MongoDB database if you use Docker or other tools.

The first 2 exercises of this level consist in defining a `IContract` interface and the `Contract` schema and model.
The third exercise consists in defining two ExpressJS APIs for retrieving contracts:

- GET / retrieves all the contracts saved on the database;
- GET /:address retrieves only the contract that has the given address or returns 404 if the contract was not found.

After you've finished your work, simply run on your terminal (remember to run `npm install` or `yarn install` if you didn't previously):

```bash
npm run exercise // or yarn run exercise
```

And then choose `Backend` and `Level 2` as the options: it will prompt to you the results of your work!
Otherwise you can just run the level 2 exercise by running the following command:

```bash
npm run exercise backend 2 // or yarn run exercise backend 2
```
