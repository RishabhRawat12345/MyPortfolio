const express = require("express");
const mongooseconnection = require("./Db/Db");
const cors = require("cors");
const route = require("./router/data_router");

const app = express();
const PORT = 8080;


app.use(cors());
app.use(express.json()); 


mongooseconnection();

app.use("/api", route);

// ✅ Correct way to start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
