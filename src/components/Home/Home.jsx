import React from 'react';
import home from '../../images/tiktok-7747898_640.jpg'
import styles from './Home.module.css'
const Home = () => {
    const { home_container, home_title } = styles;
    return (
        <div className={home_container}>
            <img src={home} alt="" />
            <div>
                <h1 className={home_title}>A simple demo quiz application.</h1>
            </div>
        </div>
    );
};

export default Home;