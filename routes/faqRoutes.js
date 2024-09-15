const express = require('express');
const router = express.Router();
const Faq = require('../models/FAQ');

// Get all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

// Add a new FAQ
router.post('/', async (req, res) => {
  const { fruit, question, answer } = req.body;

  try {
    const newFaq = new Faq({ fruit, question, answer });
    await newFaq.save();
    res.json(newFaq);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add FAQ' });
  }
});

// Update a FAQ
router.put('/:id', async (req, res) => {
  const { fruit, question, answer } = req.body;

  try {
    const updatedFaq = await Faq.findByIdAndUpdate(req.params.id, { fruit, question, answer }, { new: true });
    res.json(updatedFaq);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update FAQ' });
  }
});

// Delete a FAQ
router.delete('/:id', async (req, res) => {
  try {
    await Faq.findByIdAndDelete(req.params.id);
    res.json({ message: 'FAQ deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete FAQ' });
  }
});

module.exports = router;
