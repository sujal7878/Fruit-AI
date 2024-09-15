const express = require('express');
const faqRoutes = require('./routes/faqRoutes');
const translateRoutes = require('./routes/translateRoutes');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve login.html on root ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/login.html'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/home.html'));
});

app.get('/chatbot.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/chatbot.html'));
});

app.get('/translator.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/translator.html'));
});

app.get('/faq.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/faq.html'));
});
app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/about.html'));
});

// Routes
app.use('/faqs', faqRoutes);
app.use('/translate', translateRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
