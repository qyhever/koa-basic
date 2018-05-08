const express = require('express')
const app = express()

app.use((req, res) => {
  if (req.query.greet !== 'world') {
    throw new Error('can only greet "world"')
  }
  res.status(200)
  res.send(`Hello ${req.query.greet} from Express`)
})
// Error handler
app.use((err, req, res, next) => {
  if (!err) {
    next()
    return
  }
  console.log('Error handler:', err.message)
  res.status(400)
  res.send('Uh-oh: ' + err.message)
})

app.listen(3001, () => console.log('Express app listening on 3001'))

// err-example
app.use((req, res, next) => {
  loadCurrentWeather(req.query.city, (err, weather) => {
    if (err) {
      return next(err)
    }
    
    loadForecast(req.query.city, (err, forecast) => {
      if (err) {
        return next(err)
      }
      
      res.status(200).send({
        weather: weather,
        forecast: forecast
      })
    })
  })
  
  next()
})