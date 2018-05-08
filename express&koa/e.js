const express = require('express')
const app = express()

// Middleware 1
app.use((req, res, next) => {
  res.status(200)
  console.log('Setting status')
  // Call the next middleware
  next()
})

// Middleware 2
app.use((req, res) => {
  console.log('Setting body')
  res.send('Hello from Express')
})
app.listen(3001, () => console.log('Express app listening on 3001'))