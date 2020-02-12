import React from 'react';
import SlugButton from './SlugButton';
import styles from './ArticleListItem.module.css';
import PropTypes from 'prop-types';

const ArticleListItem = prop => {
    return (
        <div className={styles.body} >
            <h1 className={styles.header3}> { prop.article.title }</h1>
            <p>{prop.article.shortText}</p>
            <time className={styles.time} dateTime={prop.article.pubDate}>
                {prop.article.pubDate}
                <SlugButton info={prop.article}>
                    show article slug
            </SlugButton>
            </time>
        </div>
    );
};

ArticleListItem.propTypes = {
   article: PropTypes.object.isRequired
};

export default ArticleListItem;
