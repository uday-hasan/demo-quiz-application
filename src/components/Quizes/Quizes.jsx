import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './Quizes.module.css'
import Quiz from './Quiz'

export const quizLoader = async () => {
    const getQuizes = await fetch('question.json')
    const quizes = await getQuizes.json()
    return quizes
}

const Quizes = () => {
    const { quizes_container, quiz_title } = styles
    const quizes = useLoaderData()
    return (
        <section className={quizes_container}>
            <h1 className={quiz_title}>JAVASCRIPT QUIZES</h1>
            {
                quizes.map(quiz => <Quiz quiz={quiz} key={quiz.id} />)
            }
        </section>
    );
};

export default Quizes;