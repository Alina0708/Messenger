import React from "react";
import classes from "./AddNews.module.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

const AddNews = ({ setnewsInfo, newsInfo, setActive }) => {
  const onSubmit = (values, { setSubmitting }) => {
    let newsPost = {
      title: values.titleNews,
      contentNews: values.textNews,
      image: img,
      likeCount: "65",
    };
    setnewsInfo(newsInfo.push(newsPost));
    setSubmitting(true);
    setActive(false);
  };

  const onCancel = () => {
    setActive(false);
  };

  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
    <div>
      <h2>Add News</h2>
      <Formik
        initialValues={{ textNews: "", titleNews: "" }}
        validate={(values) => {
          const errors = {};
          if (values.titleNews === "") {
            errors.titleNews = "This field is required";
          }
          if (values.textNews === "") {
            errors.textNews = "This field is required";
          }

          return errors;
        }}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <Form>
            <div className={classes.titleModal}>
              <h3 htmlFor="titleNews">
                Write title news
                <span className={classes.star} />
              </h3>
              <ErrorMessage
                name="titleNews"
                // component="div"

                render={(message) => (
                  <div>
                    <span className={classes.messageError}>{message}</span>
                  </div>
                )}
              />
            </div>

            <Field
              // data-tip
              // data-for="errorTitle"
              className={classes.titleNews}
              name="titleNews"
              type="text"
              placeholder="Write title news..."
            />

            <div className={classes.titleModal}>
              <h3 htmlFor="textNews">
                Write text message
                <span className={classes.star} />
              </h3>
              <ErrorMessage
                name="textNews"
                render={(message) => (
                  <div>
                    <span className={classes.messageError}>{message}</span>
                  </div>
                )}
              />
            </div>
            <Field
              className={classes.news}
              name="textNews"
              as="textarea"
              placeholder="Write news..."
            />

            <div>
              <input
                // className={classes.buttonInsertImage}
                type="file"
                id="urlImage"
                title="image"
                onChange={onImageChange}
              />
            </div>

            <button
              className={`${classes.buttonSubmit}
                ${
                  (!formikProps.dirty || formikProps.isSubmitting) &&
                  classes.disabled
                }`}
              type="submit"
              disabled={formikProps.isSubmitting || !formikProps.dirty}
            >
              Submit
            </button>
            <button
              // className={(navData) =>
              //   navData.isActive ? classes.activeLink : classes.item
              // }
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
