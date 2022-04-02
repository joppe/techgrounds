import React from 'react';

import { RecipeProp } from '../../prop-types/RecipeProp';
import { InputFile } from '../form/InputFile';
import { InputHidden } from '../form/InputHidden';
import { InputNumber } from '../form/InputNumber';
import { InputText } from '../form/InputText';
import { Textarea } from '../form/Textarea';
import { isRequired } from '../form/validation/isRequired';

export function RecipeCommon({ recipe }) {
  return (
    <fieldset>
      {recipe && <InputHidden name="id" value={recipe.id} />}
      <div className="mb-3">
        <InputText
          label="Titel"
          name="title"
          id="title"
          value={recipe?.title}
          validityChecker={isRequired}
        />
      </div>
      <div className="mb-3">
        <InputFile
          label="Afbeelding"
          name="image"
          id="image"
          type="file"
          value={recipe?.image}
          validityChecker={isRequired}
        />
      </div>
      <div className="mb-3">
        <Textarea
          label="Omschrijving"
          name="description"
          id="description"
          value={recipe?.description}
        />
      </div>
      <div className="mb-3">
        <InputNumber
          label="Bereidingstijd"
          name="cooking_time"
          help="Bereidingstijd is in minuten."
          id="cooking_time"
          type="number"
          value={recipe?.cooking_time}
        >
          <span className="input-group-text" aria-hidden="true">
            <i className="bi bi-clock" />
          </span>
        </InputNumber>
      </div>
    </fieldset>
  );
}

RecipeCommon.propTypes = {
  recipe: RecipeProp,
};
