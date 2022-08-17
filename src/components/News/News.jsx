import React from "react";
import Modal from "../Common/Modal/Modal";
import classes from "./News.module.css";
import { useState } from "react";
import AddNews from "./AddNews/AddNews";

const News = () => {
  const news = [
    {
      title: "Bengal cat",
      contentNews:
        "The Bengal cat is a large cat with a shiny coat, very well developed muscles and a thick tail that often hangs down to the ground. The Bengal cat outwardly resembles a wild cat: the characteristic thick luxurious coat has a spotted color and marble stains. On a wide head are small ears and sideburns, the eyes are almond-shaped and black edging. The tail is thick, tapering to a black tip. No other breed of cat has the golden or pearly shimmery effect found in Bengal cats.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Gata_Bengal%C3%AD_Hembra_Brown_Spotted.jpg/1200px-Gata_Bengal%C3%AD_Hembra_Brown_Spotted.jpg",
      likeCount: "78",
    },
    {
      title: "Scottish fold cat",
      contentNews:
        "A distinctive feature of the Scottish Fold cat is its ears. They are small in size and folded towards the ear canal. The tips of the ears are round. The Scottish Fold cat is medium in size with a strong, compact body. The round head with pronounced sideburns is located on a short neck. The eyes are large and wide open, with a good-natured expression. The coat of the Scottish Fold is short and thick. It comes in a variety of colors and spotting patterns.",
      image:
        "https://cdn.lifehacker.ru/wp-content/uploads/2019/10/Depositphotos_109617914_xl-2015_1572586507-e1572586577434-630x315.jpg",
      likeCount: "45",
    },
  ];

  const [modelActive, setModelActive] = useState(false);

  return (
    <div>
      <section>
        {news.length > 0 &&
          news.map((newsItem, index) => (
            <article key={index}>
              <h2>{newsItem.title}</h2>
              <img src={newsItem.image} />
              <p>{newsItem.contentNews}</p>
              <div className={classes.like}>{newsItem.likeCount}</div>
            </article>
          ))}
      </section>
      <button
        onClick={() => setModelActive(true)}
        className={classes.buttonAdd}
      >
        Add News
      </button>
      {modelActive && (
        <Modal setActive={setModelActive}>
          <AddNews/>
        </Modal>
      )}
    </div>
  );
};

export default News;
