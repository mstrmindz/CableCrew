const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Example API endpoint to update project settings or content
app.post('/api/update', (req, res) => {
  // For demonstration, just echo back the received data
  console.log('Received update:', req.body);
  res.json({ status: 'success', received: req.body });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
