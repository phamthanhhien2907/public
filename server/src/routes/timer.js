const { handleSocketEvents } = require("../controllers/timerController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
router.get("/", [verifyToken], handleSocketEvents);
router.post("/start-timer", async (req, res) => {
  const { io } = req;
  const currentTimer = await Timer.findOne();
  if (!currentTimer || !currentTimer.isRunning) {
    await startCountdown(io);
  }
  res.json({ success: true });
});

module.exports = router;
