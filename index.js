function callbox (fn) {
  return new Promise((resolve, reject) => {
    fn(function (err, res) {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

module.exports = callbox
