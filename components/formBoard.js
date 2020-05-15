import React from 'react';
import { useDispatch } from 'react-redux';
import { useField, Form, Formik } from 'formik';
import { addInfo } from '../src/actions/index';

function FormBoard({ openForm, handleFormFn }) {
  const dispatch = useDispatch();
  const InputField = ({ label, ...props }) => {
    const [field] = useField(props);

    switch (props.type) {
      case 'text':
        return (
          <>
            <label>
              {label}
              <input {...field} {...props} />
            </label>
          </>
        );
      case 'textarea':
        return (
          <>
            <label>
              {label}
              <textarea {...field} {...props} />
            </label>
          </>
        );
      case 'select':
        return (
          <>
            <label>
              {label}
              <select {...field} {...props}>
                <option hidden>Select:</option>
                <option value="news">News</option>
                <option value="world">World</option>
                <option value="business">Business</option>
                <option value="sport">Sport</option>
              </select>
            </label>
          </>
        );
      default:
        break;
    }
  };

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
        <Formik
          initialValues={{
            name: '',
            title: '',
            description: '',
            category: '',
            date: Date(),
            image: '',
          }}
          onSubmit={(values, actions) => {
            dispatch(addInfo(values));
          }}
        >
          <Form className="board-info-form__content">
            <button
              className="board-info-form__btn-close"
              onClick={handleFormFn}
            >
              X
            </button>
            <InputField name="title" type="text" label="Title" />
            <InputField
              name="description"
              type="textarea"
              label="Info description"
              rows="4"
            />
            <InputField name="name" type="text" label="Author name" />
            <InputField name="category" type="select" label="Info category" />
            <InputField name="image" type="text" label="Image URL" />
            <button className="board-info-form__btn-submit" type="submit">
              Add info
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default FormBoard;
