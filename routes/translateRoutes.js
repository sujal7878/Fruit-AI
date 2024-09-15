const express = require('express');
const router = express.Router();

const API_KEY = "Enter your API key";

router.post('/', async (req, res) => {
  const { text, language } = req.body;

  try {
    // Dynamically import node-fetch for ESM support
    const fetch = (await import('node-fetch')).default;

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Translate the following text into ${language}: ${text}`,
        max_tokens: 60
      })
    });

    const result = await response.json();
    const translation = result.choices[0].text.trim();

    res.json({ translation });
  } catch (error) {
    console.error('Error translating text:', error);
    res.status(500).json({ error: 'Failed to translate text' });
  }
});

module.exports = router;
