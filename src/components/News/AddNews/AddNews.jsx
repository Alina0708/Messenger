import React from "react";
import classes from "./AddNews.module.css";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddNews = ({ setnewsInfo, newsInfo, setActive }) => {
  const onSubmit = (values, { setSubmitting }) => {
    let newsPost = {
      title: values.titleNews,
      contentNews: values.textNews,
      image: values.urlImage,
      likeCount: "65",
    };
    setnewsInfo(newsInfo.push(newsPost));
    setSubmitting(true);
    setActive(false);
  };

  const onCancel = () => {
    setActive(false);
  };

  return (
    <div>
      <h2>Add News</h2>
      <Formik
        initialValues={{ textNews: "", urlImage: "", titleNews: "" }}

        validate={(values) => {
          const errors = {};
          if (values.titleNews === "") {
            errors.titleNews = "Write a title. Required!";
          } else if (values.textNews === "") {
            errors.textNews = "Write news. Required!";
          } else if (values.urlImage === "") {
            errors.urlImage = "Write url image. Required";
          }
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <Form>
            <label htmlFor="titleNews">Write title news</label>
            <Field
              className={classes.imageUrl}
              name="titleNews"
              id="titleNews"
              type="text"
              placeholder="Write title news..."
            />
            <ErrorMessage name="titleNews" component="div" />

            <label htmlFor="urlImage">Write url image</label>
            <Field
              className={classes.imageUrl}
              name="urlImage"
              id="urlImage"
              type="text"
              placeholder="write url image..."
            />
            <ErrorMessage name="urlImage" component="div" />

            <label htmlFor="textNews">Write text message</label>
            <Field
              className={classes.news}
              name="textNews"
              as="textarea"
              placeholder="write news..."
            />
            <ErrorMessage name="textNews" component="div" />

            <button
              className={classes.buttonSubmit}
              type="submit"
              disabled={formikProps.isSubmitting}
            >
              Submit
            </button>
            <button
              className={classes.buttonCancel}
              type="button"
              onClick={onCancel}
              // disabled={formikProps.isSubmitting}
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNews;
