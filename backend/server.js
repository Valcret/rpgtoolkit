const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Exemple de route API
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
