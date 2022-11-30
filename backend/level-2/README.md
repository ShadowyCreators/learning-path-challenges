# 🤖 Backend Level 2 Challenge

In the **Level 2 Challenge** for the _Backend_ path you'll define some routes and middlewares for an `ExpressJS` app.

You'll need to:

- Define a basic `GET /` route that returns `Hello World!`;
- Define an auth middleware that checks for the existance of the `x-shadowy-user` header: if it's missing, the response must return a 403 status code;
- Define a `GET /protected` route that uses the middleware above and returns the `x-shadowy-user` header value.

After you've finished your work, simply run on your terminal:

```bash
npm run exercise
```

And then choose `Backend` and `Level 2` as the options: it will prompt to you the results of your work!
