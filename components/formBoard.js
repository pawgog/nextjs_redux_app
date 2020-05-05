import React, { useState } from 'react';

function FormBoard({ openForm, handleFormFn, handleChangeFn, addInfoFn }) {
  const [infoForm, infoFormSet] = useState({
    name: '',
    title: '',
    description: '',
    category: '',
    date: '',
    image: '',
  });

  return (
    <>
      <button className="board-info-form__btn-add" onClick={handleFormFn}>
        +
      </button>
      <div
        className={
          openForm
            ? 'board-info-form board-info-form--open'
            : 'board-info-form board-info-form--close'
        }
      >
        <form className="board-info-form__content" onSubmit={addInfoFn}>
          <button className="board-info-form__btn-close" onClick={handleFormFn}>
            X
          </button>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              value={infoForm.title}
              onChange={handleChangeFn}
            />
          </label>
          <label htmlFor="description">
            Info description
            <textarea
              type="text"
              id="description"
              name="description"
              rows="10"
              value={infoForm.description}
              onChange={handleChangeFn}
            />
          </label>
          <label htmlFor="name">
            Author Name
            <input
              type="text"
              id="name"
              name="name"
              value={infoForm.name}
              onChange={handleChangeFn}
            />
          </label>
          <label htmlFor="category">
            Info category
            <select
              id="category"
              name="category"
              value={infoForm.category}
              onChange={handleChangeFn}
            >
              <option value="news">News</option>
              <option value="world">World</option>
              <option value="business">Business</option>
              <option value="sport">Sport</option>
            </select>
          </label>
          <label htmlFor="image">
            Image URL
            <input
              type="text"
              id="image"
              name="image"
              value={infoForm.image}
              onChange={handleChangeFn}
            />
          </label>
          <button className="board-info-form__btn-submit" type="submit">
            Add info
          </button>
        </form>
      </div>
    </>
  );
}

export default FormBoard;
