# await-callback

Wrap and await callback code

## Usage

```js
var promise = require('await-callback')
var fs = require('fs')

async function main () {
  var result = await promise(done => {
    fs.writeFile('hello', 'world', 'utf8', err => {
      if (err) return done(err)
      fs.readFile('hello', 'utf8', done)
    })
  })

  console.log(result) // 'world'
}

main()
```

## License

Apache-2.0
