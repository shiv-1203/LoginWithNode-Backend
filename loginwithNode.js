const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
    origin:'*'
}));

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample user data
const users = [
  { userId: 1, name: 'John Doe', email: 'john@example.com', password: 'password' },
  { userId: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password123' }
];

// API endpoint to handle login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user credentials are correct
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Return user data on successful login
    res.json(user);
  } else {
    // Return error message on failed login
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
