import React from 'react';
import styles from '../../styles/Quote.module.scss';
const Quote = () => {
    return(
        <div className="p-5">
            <div className={styles.div}>
                <div className={styles.quoteWrapper}>
                    <blockquote className={styles.text} cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
                        <p>Experience design is the design of anything, independent of medium, or across media, with human experience as an
                        explicit outcome,and human engagement as an explicit goal.</p>
                        <footer>– Jesse James Garrett</footer>
                    </blockquote>
                </div>
            </div>
        </div>
        
    );
}

export default Quote;