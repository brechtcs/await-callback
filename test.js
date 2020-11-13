var promise = require('./')
var test = require('tape')

test('basic usage', async t => {
  var three = promise(done => setTimeout(done, 300, null, 3))
  t.ok(three)
  t.equal(typeof three.then, 'function')
  t.equal(await three, 3)

  var fail = promise(done => setTimeout(done, 300, new Error('fail')))
  try {
    await fail
    t.fail()
  } catch (err) {
    t.ok(err)
  } finally {
    t.end()
  }
})

test('double done', async t => {
  var double = promise(done => {
    done(null, 1)
    done(null, 2)
  })

  try {
    await double
    t.fail()
  } catch (err) {
    t.ok(err)
  } finally {
    t.end()
  }
})

test('disable once', async t => {
  var p = promise.bind({ once: false })
  var double = p(done => {
    done(null, 1)
    done(null, 2)
  })

  await double
  t.ok(true)
  t.end()
})
