import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from './ArticleImage';
import PropTypes from 'prop-types';

const ArticleListItem = props => {
  return (
    <div className={styles.body}>
    <ArticleImage info={props.article}></ArticleImage>
    <div className={styles.textArea}>
      <h1 className={styles.header3}>{props.article.title}</h1>
      <p className={styles.shortText}>{props.article.shortText}</p>
      <time className={styles.time} dateTime={props.article.pubDate}>{props.article.pubDate}</time><br />
      <SlugButton info={props.article}>
          show article slug
      </SlugButton>
    </div> 
    </div>
  );
};
ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleListItem;
