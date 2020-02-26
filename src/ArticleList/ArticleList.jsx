import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <ul className={styles.body}>
      {props.articles.map(article => (
        <li className={styles.list}>
          <ArticleListItem article={article}></ArticleListItem>
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
