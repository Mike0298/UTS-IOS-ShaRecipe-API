const express = require('express');
const router = express.Router();

const ShareableRecipe = require('../../models/ShareableRecipe');

//@route    GET    /api/shareable/
//@desc     Get a shareable recipe given an id
//@access   Public

router.get('/', async (req, res) => {
  try {
    let recipes = await ShareableRecipe.find()
      .sort({ date: -1 })
      .select(['-date']);
    return res.status(200).json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    GET    /api/shareable/recipe_id
//@desc     Get a shareable recipe given an id
//@access   Public

router.get('/:recipe_id', async (req, res) => {
  try {
    const recipe = await ShareableRecipe.findById(req.params.recipe_id).select(
      '-date'
    );
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    return res.status(200).json(recipe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(500).send('Server Error');
  }
});

//@route    POST    /api/shareable/
//@desc     Create a shareable recipe and return the recipe id
//@access   Public

router.post('/', async (req, res) => {
  const { name, description, ingredients, direction, category } = req.body;

  const recipeFields = {};
  if (name) recipeFields.name = name;
  if (description) recipeFields.description = description;
  if (ingredients) recipeFields.ingredients = ingredients;
  if (direction) recipeFields.direction = direction;
  if (category) recipeFields.category = category;

  try {
    const recipe = new ShareableRecipe({
      ...recipeFields,
    });
    recipe.code = recipe._id;
    await recipe.save();
    return res.status(200).json({
      code: recipe.code,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
