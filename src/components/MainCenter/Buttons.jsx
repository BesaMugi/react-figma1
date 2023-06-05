import React from 'react';
import styles from "./MainContent.module.css"

const Buttons = () => {
    return (
        <div className={styles.count}>
            <button className={styles.increase}>Увеличить</button>
            <button className={styles.decrease}>Уменьшить</button>
            <button className={styles.reset}>Сбросить</button>
        </div>
    );
}

export default Buttons;