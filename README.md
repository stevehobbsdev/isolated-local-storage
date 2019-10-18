## Isolated Local Storage Example

An example of how to perform local storage access isolated by origin. It uses a hidden iframe to marshal access to local storage to store (fictional) token values.

The sample starts two Express servers running on two different origins: `http://localhost:4001` (app) and `http://localhost:4002` (private). The app communicates with the private origin through the iframe to perform read and write operations on local storage.

## Running the app

To start both the app and the "private" origin, run:

```
yarn start
```

Then [open your browser at http://localhost:4001](http://localhost:4001) to view the app.

## Reference

https://pragmaticwebsecurity.com/talks/browsersecrets.html
