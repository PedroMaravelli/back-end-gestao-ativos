const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const MainRoutes = require("./Routes/mainRoutes")



app.use(cors());
app.use(express.json());
app.use('/', MainRoutes );




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})