const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.json())

const port = 3000


app.all("*", require("./Routes/index"))

app.listen(port, (err, res) => {
  if (err) console.log("Error " + err)
  else console.log("App is listening at port 3000")
})
