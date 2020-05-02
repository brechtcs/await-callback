var once = require('once')

function callbox (fn) {
  return new Promise((resolve, reject) => {
    function done (err, res) {
      setImmediate(() => {
        if (err) reject(err)
        else resolve(res)
      })
    }

    fn(once.strict(done))
  })
}

module.exports = callbox
