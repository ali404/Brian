const express = require('express')
const app = express()

const port = process.env.PORT || 3001
app.set('port', port)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

const router = express.Router()

router.get('/', function(req, res) {
  res.json({
    message: 'it works'
  })
})

app.use('/api', router)

app.listen(app.get('port'), function() {
  console.log('Find the server at: http://localhost:3001/')
})
