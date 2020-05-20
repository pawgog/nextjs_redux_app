import React from 'react';
import { useDispatch } from 'react-redux';
import { useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { addInfo } from '../src/actions/index';

function FormBoard({ openForm, handleFormFn }) {
  const dispatch = useDispatch();

  const ValidateInfoForm = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Title is too short!')
      .required('Title should not be empty'),
    description: Yup.string().required('Info description should not be empty'),
    name: Yup.string()
      .email('Invalid email')
      .required('Author name should not be empty'),
    image: Yup.string().required('Image url should not be empty'),
  });

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
          validationSchema={ValidateInfoForm}
          onSubmit={(values) => {
            handleFormFn();
            dispatch(addInfo(values));
          }}
        >
          {({ errors, touched }) => (
            <Form className="board-info-form__content">
              <button
                className="board-info-form__btn-close"
                onClick={handleFormFn}
              >
                X
              </button>
              <InputField name="title" type="text" label="Title" />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
              <InputField
                name="description"
                type="textarea"
                label="Info description"
                rows="4"
              />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <InputField name="name" type="text" label="Author name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <InputField name="category" type="select" label="Info category" />
              <InputField name="image" type="text" label="Image URL" />
              {errors.image && touched.image ? <div>{errors.image}</div> : null}
              <button className="board-info-form__btn-submit" type="submit">
                Add info
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormBoard;
