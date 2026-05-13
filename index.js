const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Health Route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("CI-CD with Docker and EC2 is working now...")
});
