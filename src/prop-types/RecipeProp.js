import PropTypes from 'prop-types';

export const RecipeProp = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  cooking_time: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      caption: PropTypes.string,
    }),
  ),
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      unit: PropTypes.string,
    }),
  ),
  instructions: PropTypes.arrayOf(PropTypes.string),
});
