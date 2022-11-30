# 👾 Contracts Level 1 Challenge

The **Level 1 Challenge** for the _Contracts_ path consists in filling few lines of code in the `Owned.sol` contract; more in detail you must:

- Update the constructor to set the public `owner` variable to the sender of the transaction;
- Update the `onlyOwner` modifier to allow only the `owner` address to call functions where the modifier is applied;
- Update the `publicFunctionForUsers` functions to return the address of the wallet that's calling the function.

After you've finished your work, simply run on your terminal:

```bash
npm run exercise // or yarn run exercise
```

And then choose `Contract` and `Level 1` as the options: it will prompt to you the results of your work!
Otherwise you can just run the level 1 exercise by running the following command:

```bash
npm run exercise contracts 1 // or yarn run exercise contracts 1
```
