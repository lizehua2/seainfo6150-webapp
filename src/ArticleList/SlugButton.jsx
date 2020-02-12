import React from 'react';
import styles from './SlugButton.module.css';
import PropTypes from 'prop-types';

const SlugButton = prop => {
    return (
        <button onClick={() => alert(prop.info.slug)} className={styles.Slugbutton}>
                {prop.info.author}
            </button>
    );
};
SlugButton.propTypes = {
    info: PropTypes.object.isRequired
};

export default SlugButton;