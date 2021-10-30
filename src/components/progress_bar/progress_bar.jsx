import React from 'react';
import styles from './progress_bar.module.css'

const ProgressBar = (props) => {

    return (
        <div className={styles.progress_bar}>
            <div className={styles.progress_bar_full} style={{width: `${props.progress}%`}}>
            </div>
      </div>
    )
}

export default ProgressBar;