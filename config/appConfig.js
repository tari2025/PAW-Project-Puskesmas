const path = require('path');

module.exports = {
  appName: 'Medilab',
  port: process.env.PORT || 3100,
  logDir: path.join(__dirname, '..', 'logs'),
  logFile: 'logger.md'
};
