const fs = require('fs');
const path = require('path');
const { logDir, logFile } = require('../config/appConfig');

const writeLog = (data) => {
  try {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const filePath = path.join(logDir, logFile);
    const line = `| ${data.timestamp} | ${data.method} | ${data.path} | ${data.status} |\\n`;

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(
        filePath,
        '# Request Logger\\n\\n| Timestamp | Method | Path | Status |\\n|---|---|---|---|\\n'
      );
    }

    fs.appendFileSync(filePath, line);
  } catch (error) {
    console.error('Gagal menyimpan log:', error.message);
  }
};

module.exports = { writeLog };
