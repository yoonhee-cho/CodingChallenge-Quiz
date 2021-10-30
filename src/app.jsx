import React, { useState } from 'react';
import styles from './app.module.css';
import ProgressBar from './components/progress_bar/progress_bar';
import Footer from './components/footer/footer'

function App() {
  const questions = [
    {
			questionText: 'Did You Escape From NY or LA?',
			answerOptions: [
				{ answerText: 'Start Quiz', cityName: 'none' },
			],
		},
    {
			questionText: 'In which year did you escape?',
			answerOptions: [
				{ answerText: '1997', cityName: 'NY' },
        { answerText: '2013', cityName: 'LA' },
			],
		},
    {
			questionText: 'What caused the root of all of the chaos?',
			answerOptions: [
				{ answerText: 'An earthquake', cityName: 'LA' },
        { answerText: 'World War 3', cityName: 'NY' },
			],
		},
    {
			questionText: 'The president tries to stop an invasion from where?',
			answerOptions: [
				{ answerText: 'Cuba', cityName: 'LA' },
        { answerText: 'Soviet Union', cityName: 'NY' },
			],
		},
    {
			questionText: 'Where was an island converted into a prison?',
			answerOptions: [
				{ answerText: 'LA', cityName: 'LA' },
        { answerText: 'Manhattan', cityName: 'NY' },
			],
		},
    {
			questionText: 'At the end of the movie, the main character Snake, does what?',
			answerOptions: [
				{ answerText: 'Puffs a cigarette while going into the darkness', cityName: 'NY' },
        { answerText: 'Picks a cigarette box labelled “American Spirit”', cityName: 'LA' },
			],
		},
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showEnd, setShowEnd] = useState(false);
	const [nyScore, setNyScore] = useState(0);
	const [laScore, setLaScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleClick = (e, cityName) => {
    if(cityName === 'NY') {
      setNyScore(nyScore+1);
    } else if (cityName === 'LA') {
      setLaScore(laScore+1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
      const increasingPercentage= (currentQuestion / 5) * 100;
      setPercentage(increasingPercentage);
    }else {
      setPercentage(100);
			setShowEnd(true);
		}
  }
  
  return (
    <>
      <div className={styles.app}>

        {
          currentQuestion > 0 ? ( <ProgressBar progress={percentage}/>) : null
        }

        <div className={styles.content}>
          {showEnd ? (
            <div className={styles.end}>
              <h1 className={styles.end_text}>Congrats, you are a survivor!  You just escaped from { laScore > nyScore ? `LA` : 'NY'}!”</h1>
            </div>
            ) : (
                <>
                  <div className={styles.question_section}>
                    <div className={styles.question_count}>
                      <span> { currentQuestion > 0 ? (<p> Q{currentQuestion }</p>) : <p>Quiz</p> } </span>
                    </div>
                    <h1 className={styles.question_text}>{questions[currentQuestion].questionText}</h1>
                  </div>

                  <div className={styles.answer_section}>
                    {questions[currentQuestion].answerOptions.map((answerOption) => {
                            return <button 
                                      onClick={e => handleClick(e, answerOption.cityName)}
                                      className={styles.button}>
                                        {answerOption.answerText}
                                    </button>
                    })}
                  </div>
                </>
            )}
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
