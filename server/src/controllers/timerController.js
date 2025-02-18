const Timer = require("../models/timer");

let countdownInterval = null;

const startCountdown = async (io) => {
  clearInterval(countdownInterval);

  let timer = await Timer.findOne();
  if (!timer) {
    timer = new Timer({ remainingTime: 120, isRunning: true });
  } else {
    // Luôn reset về 120 nếu đã kết thúc
    if (timer.remainingTime <= 0) {
      timer.remainingTime = 120;
    }
    timer.isRunning = true;
  }

  await timer.save();

  countdownInterval = setInterval(async () => {
    timer.remainingTime -= 1;

    if (timer.remainingTime <= 0) {
      clearInterval(countdownInterval);
      timer.isRunning = true; // Giữ trạng thái chạy
      timer.remainingTime = 120; // Reset về 2 phút
      await timer.save();

      // Tự động chạy lại ngay lập tức
      startCountdown(io);
      return;
    }

    await timer.save();
    io.emit("timerUpdate", {
      remainingTime: timer.remainingTime,
      isRunning: true,
    });
  }, 1000);
};
const handleSocketEvents = (io) => {
  io.on("connection", async (socket) => {
    console.log("New client connected");

    // Gửi trạng thái hiện tại khi client kết nối
    const timer = await Timer.findOne();
    if (!timer || !timer.isRunning) {
      await startCountdown(io);
    }
    socket.emit("timerUpdate", {
      remainingTime: timer?.remainingTime || 120,
      isRunning: timer?.isRunning || false,
    });

    // Xử lý sự kiện start timer
    socket.on("startTimer", async () => {
      const currentTimer = await Timer.findOne();
      if (!currentTimer || !currentTimer.isRunning) {
        await startCountdown(io);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

module.exports = {
  startCountdown,
  handleSocketEvents,
};
