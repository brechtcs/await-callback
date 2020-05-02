var promise = require('./')
var test = require('tape')

test('basic usage', async t => {
  var three = promise(done => {
    setTimeout(done, 3000, null, 3)
  })

  t.ok(three)
  t.equal(typeof three.then, 'function')
  t.equal(await three, 3)
  t.end()
})
