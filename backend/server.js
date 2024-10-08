const dotEnv = require("dotenv");
dotEnv.config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app started in port ${port}`);
});
