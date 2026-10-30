const { writeLog } = require('../utils/loggerUtils');

const logger = (req, res, next) => {
  const waktuMulai = new Date();

  res.on('finish', () => {
    const logData = {
      timestamp: waktuMulai.toISOString(),
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode
    };

    const message = `[${logData.timestamp}] ${logData.method} ${logData.path} - ${logData.status}`;
    console.log(message);
    writeLog(logData);
  });

  next();
};

module.exports = logger;
