var config = require('configure-this')
var once = require('once')

function promise (fn) {
  var opts = config(this, { once: true })

  return new Promise((resolve, reject) => {
    function callback (err, res) {
      setImmediate(() => {
        if (err) reject(err)
        else resolve(res)
      })
    }

    fn(opts.once ? once.strict(callback) : callback)
  })
}

module.exports = promise
