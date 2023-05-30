
const express = require('express');
const app = express();
const userRouter = require("./routes/routes.user");
const taskRouter = require("./routes/routes.task");
const statsRouter = require("./routes/routes.stats");
const planningRouter = require("./routes/routes.planning");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send("Message à afficher sur la page d'accueil");
});

app.use("/user", userRouter);
app.use("/task", taskRouter);
app.use("/stats", statsRouter);
app.use("/planning", planningRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log('http://localhost:3000');
});
