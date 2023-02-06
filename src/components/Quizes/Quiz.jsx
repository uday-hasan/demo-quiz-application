import React, { useState } from 'react';
import QuizSnackbar from './QuizSnackbar';
import styles from './Quizes.module.css'

const Quiz = ({ quiz }) => {
    const { quiz_title } = styles
    const { question, answers, correctAnswer, _id, explanation } = quiz
    const getAnswersValues = Object.values(answers)
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const [severity, setSeverity] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true)
        if (e.target.answers.value === '') {
            setSeverity('warning')
            return
        }
        else {
            for (const a in correctAnswer) {
                if (correctAnswer[a] === true) {
                    if (e.target.answers.value === answers[a]) {
                        setSeverity('success')
                    }
                    else {
                        setSeverity('error')
                    }
                }
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className={quiz_title}>Quiz {_id} : {question}</h3>
            <div>
                {
                    getAnswersValues.map(ans => <div key={ans._id}>
                        <input className={quiz_title} type={'radio'} name='answers' value={ans} /> {ans}

                    </div>)
                }
            </div>
            <button type='submit'>Submit</button>
            {
                open && <QuizSnackbar open={open} handleClose={handleClose} severity={severity} explanation={explanation} />
            }
        </form>
    );
};

export default Quiz;