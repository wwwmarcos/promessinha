# promise.all
Resolves an array of promises in parallel and return an object with an array of 'successes' and an array of 'errors'.

# Install
`npm i all-promises-resolver --save` or `yarn add all-promises-resolver`

# Usage example
```js
const promiseAll = require('promise.all')

const myPromises = anyList.map(id => httpRequest(id))

const result = await promiseAll(myPromises)

console.log(result)
/**
   {
     successes: [{ successReponse }, { successReponse }],
     errors: [{ errorReponse }]
   }
*/

```