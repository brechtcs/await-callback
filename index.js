var once = require('once')

function promise (fn) {
  return new Promise((resolve, reject) => {
    function callback (err, res) {
      setImmediate(() => {
        if (err) reject(err)
        else resolve(res)
      })
    }

    fn(once.strict(callback))
  })
}

module.exports = promise
