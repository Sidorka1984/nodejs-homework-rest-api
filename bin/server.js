const app = require('../app')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
require("dotenv").config();

const {DB_HOST} = process.env

const PORT = process.env.PORT || 3000

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> app.listen(PORT))
.catch(error => {
  console.log(error.message);
  process.exit(1);
})

// app.listen(PORT, () => {
  // console.log(`Server running. Use our API on port: ${PORT}`)
// })
// 