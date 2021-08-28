import React from 'react';
import styles from './BlockQuote.module.scss';

const BlockQuote = ({ quote }) => {
    const [message, author] = quote?.split(" - ");
    return (
        <div className={styles.blockQuoteWrapper}>
            <blockquote className={`blockquote ${styles.blockQuote}`}>
                <p>
                    "{message}"
                </p>
                <footer className={`blockquote-footer ${styles.author}`}><cite title={author}>{author}</cite></footer>
            </blockquote>
        </div>
    );
}

export default BlockQuote;