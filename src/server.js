const app = require("./index");
const connect = require("./configs/db");
app.listen(1890, async () => {
  try {
    await connect();
    console.log("Listening on port 1890");
  } catch (e) {
    console.log(e.message);
  }
});
