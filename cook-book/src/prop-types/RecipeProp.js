import PropTypes from 'prop-types';

export const RecipeInstructionProp = PropTypes.shape({
  id: PropTypes.string,
  text: PropTypes.string,
});

export const RecipeIngredientProp = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  unit: PropTypes.string,
});

export const RecipeProp = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  cooking_time: PropTypes.number,
  image: PropTypes.string,
  ingredients: PropTypes.arrayOf(RecipeIngredientProp),
  instructions: PropTypes.arrayOf(RecipeInstructionProp),
});
