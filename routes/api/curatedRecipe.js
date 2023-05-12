const express = require('express');
const router = express.Router();

const CuratedRecipe = require('../../models/CuratedRecipe');

//@route    GET    /api/curated/
//@desc     Get all curated recipe
//@access   Public

router.get('/', async (req, res) => {
  try {
    let recipes = await CuratedRecipe.find()
      .sort({ date: -1 })
      .select(['-date']);
    return res.status(200).json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST    /api/curated/
//@desc     Add a curated recipe
//@access   Public

router.post('/', async (req, res) => {
  const { name, image, description, ingredients, direction, category } =
    req.body;

  const recipeFields = {};
  if (name) recipeFields.name = name;
  if (image) recipeFields.image = image;
  if (description) recipeFields.description = description;
  if (ingredients) recipeFields.ingredients = ingredients;
  if (direction) recipeFields.direction = direction;
  if (category) recipeFields.category = category;

  try {
    let recipe = await CuratedRecipe.findOne({
      name,
      category,
    });
    if (recipe) {
      return res.status(400).json({
        error: 'Already exist a curated recipe with the same name and category',
      });
    }
    recipe = new CuratedRecipe(recipeFields);
    await recipe.save();
    return res.status(200).json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
