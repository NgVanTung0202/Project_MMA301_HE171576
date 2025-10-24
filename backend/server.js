const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Thanh' },
    { id: 2, name: 'Ly' }
  ]);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
