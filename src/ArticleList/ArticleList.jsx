import React from "react";
import PropTypes from 'prop-types';
import Button from './ArticleListItem';

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
          <li key={article.slug}>
              <h2>{article.title}</h2>
              <p>{article.shortText}</p>
              <time dateTime>
              {article.pubDate}
              <Button info={article} />
              </time>
          </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
