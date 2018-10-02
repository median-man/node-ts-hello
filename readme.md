# Node Typescript Hello World

This project is a basic "Hello, World!" to explore setting up app using Typescript, Node, Express, and Jest.

A server is created listening on port 3000 which will respond to `GET '/'` with `{ "message": "Hello, World! }`.

## Code Linting and Prettier

Prettier and TSLint are configured so that VSCode and other IDEs with support for this suite of tools can provide syntax highlighting and and auto-formatting. For VSCode, install extensions for these tools. Run `npm run lint` to see lint output in the command line.

## Testing with Jest

Jest is the test runner and Supertest is included to facilitate easy testing of Express. `npm test` will launch Jest in watch mode.

## Links

- [Typescript][7]
- [Express][1]
- [Jest][5]
- [Supertest][6]
- [TSLint][3]
- [Prettier][4]

[1]: http://expressjs.com/
[3]: https://palantir.github.io/tslint/
[4]: https://prettier.io/
[5]: https://jestjs.io/en/
[6]: https://github.com/visionmedia/supertest
[7]: https://www.typescriptlang.org/
