import React, { Fragment, useEffect, useState } from 'react'
import  { GiTrophyCup } from 'react-icons/gi';
import Modal from '../Modal';

const QuizOver = React.forwardRef((props, ref) => {

  const {
    levelNames,
    score,
    maxQuestions,
    quizLevel,
    percent,
    loadLevelQuestions
  } = props;

  const [asked, setAsked] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [idQuestion, setIdQuestion] = useState(0);


  useEffect(() => {
    setAsked(ref.current)
  }, [ref])



  const showModal = () => {
    setOpenModal(true)
  }

  const hideModal = () => {
    setOpenModal(false);
  }

  const averageGrade = maxQuestions / 2

  if (score < averageGrade) {
    // setTimeout(() => loadLevelQuestions(0), 3000)
    setTimeout(() => loadLevelQuestions(quizLevel), 6000)
  }

  const decision = score >= averageGrade ? (

    <Fragment>
      <div className="stepsBtnContainer">
        {
          quizLevel < levelNames.length ?
            (
              <Fragment>
                <p className="successMsg">Bravo, passez au niveau suivant!</p>
                <button
                  className="btnResult success"
                  onClick={() => loadLevelQuestions(quizLevel)}
                >
                  Niveau Suivant
                </button>
              </Fragment>
            )
            :
            (
              <Fragment>
                <p className="successMsg"><GiTrophyCup size='50px'/>Bravo, vous êtes un expert !</p>
                <button
                  className="btnResult gameOver"
                  onClick={() => loadLevelQuestions(0)}
                >
                  Accueil
                </button>
              </Fragment>
            )
        }
      </div>
      <div className="percentage">
        <div className="progressPercent">Réussite: {percent} %</div>
        <div className="progressPercent">Note: {score}/{maxQuestions}</div>
      </div>
    </Fragment>
  )
    :
    (
      <Fragment>
        <div className="stepsBtnContainer">
          <p className="failureMsg">Vous avez échoué !</p>
        </div>

        <div className="percentage">
          <div className="progressPercent">Réussite: {percent} %</div>
          <div className="progressPercent">Note: {score}/{maxQuestions}</div>
        </div>
      </Fragment>
    )
  const questionAnswer = score >= averageGrade ? (
    asked.map(question => {
      return (
        <tr key={question.id}>
          <td>{question.question}</td>
          <td>{question.answer}</td>
          <td>
            <button
            id={question.id}
            className='btnInfo'
            onClick={(e) =>{ setIdQuestion(e.target.id); showModal()}}
            >Infos</button>
          </td>
        </tr>
      )
    })
  )
    :
  (
      <tr>
        <td colSpan='3'>
          <div className='loader'></div>
          <p style={{ textAlign: 'center', color: 'red' }}>
            Pour voir les réponses il faut avoir la moyenne^^
          </p>
        </td>
      </tr>
    )

  return (
    <Fragment>

      {decision}

      <hr />
      <p>Les réponses aux questions posées:</p>
      <div className='answerContainer'>
        <table className='answers'>
          <thead>
            <tr>
              <th>Question</th>
              <th>Réponses</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>
            {questionAnswer}
          </tbody>
        </table>
      </div>

      <Modal showModal={openModal} hideModal={hideModal}>
      <Fragment>
      <div className='modalHeader'>
      <h2>{ref.current[idQuestion].question}</h2>
    </div>
    <div className='modalBody'>
      <h3>{ref.current[idQuestion].infos}</h3>
    </div>
    <div className='modalFooter'>
      <button className='modalBtn'>Fermer</button>
    </div>
    </Fragment>
      </Modal>

    </Fragment>
  )
})

export default React.memo(QuizOver)