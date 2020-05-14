import React, { useState } from 'react';

function SelectCategory({ selectCategoryFn }) {
  const [category, selectCategory] = useState();

  return (
    <label className="board-info-form__category" htmlFor="category">
      Category:
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => {
          selectCategoryFn(e.target.value), selectCategory(category);
        }}
      >
        <option value="all">All</option>
        <option value="news">News</option>
        <option value="world">World</option>
        <option value="business">Business</option>
        <option value="sport">Sport</option>
      </select>
    </label>
  );
}

export default SelectCategory;
