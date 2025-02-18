const authRouter = require("./auth");
const userRouter = require("./user");
const timerRouter = require("./timer");

const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/Timer", timerRouter);
};
module.exports = initRoutes;
