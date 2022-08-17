import React from "react";
import classes from "./AddNews.module.css";
import { Formik } from 'formik';


const AddNews = () => {
  return (
  <section>
    <form>
    <h3>Add News</h3>
    <label htmlFor="url">Input URL image</label>
    <input id="url"/>
    <label htmlFor="news">Input news</label>
    <textarea id="news" placeholder="Add new news..."/>
    <div>
        <button className={classes.buttonSubmit}>Submit</button>
        <button className={classes.buttonCancel}>Cancel</button>
    </div>
    </form>
  </section>);
};

export default AddNews;
