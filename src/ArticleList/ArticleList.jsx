import React from "react";
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import styles from './ArticleList.module.css'

const ArticleList = prop => {
  return (
    <ul className={styles.body}>
      {prop.articles.map(article => (
          <li key={article.slug}>
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
