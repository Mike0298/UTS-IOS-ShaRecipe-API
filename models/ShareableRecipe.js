const mongoose = require('mongoose');

const ShareableRecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model(
  'ShareableRecipe',
  ShareableRecipeSchema
);
