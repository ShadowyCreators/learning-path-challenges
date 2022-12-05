# 🤖 Backend Level 2 Challenge

In the **Level 2 Challenge** for the _Backend_ path you'll define some routes and middlewares for an `ExpressJS` app.

You'll need to:

- Define a basic `GET /` route that returns `Hello World!`;
- Define an auth middleware that checks for the existance of the `x-shadowy-user` header: if it's missing, the response must return a 403 status code;
- Define a `GET /protected` route that uses the middleware above and returns the `x-shadowy-user` header value.

After you've finished your work, simply run on your terminal (remember to run `npm install` or `yarn install` if you didn't previously):

```bash
npm run exercise // or yarn run exercise
```

And then choose `Backend` and `Level 2` as the options: it will prompt to you the results of your work!
Otherwise you can just run the level 2 exercise by running the following command:

```bash
npm run exercise backend 2 // or yarn run exercise backend 2
```
