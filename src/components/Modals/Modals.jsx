import React from 'react'
import style from './modals.module.css'

import AddSubject from './Subjects/AddSubject'
import EditSubject from './Subjects/EditSubject'

import AddTopic from './Subjects/AddTopic'
import EditTopic from './Subjects/EditTopic'

import AddNewQuestion from './Subjects/QuestionBankActions/AddNewQuestion'
import NewQuestionConfirm from './Subjects/QuestionBankActions/NewQuestionConfirm'
import ExamSucces from './Subjects/QuestionBankActions/ExamSucces'
import EditExam from './Subjects/QuestionBankActions/EditExam'
import AddStudents from './StudentsMods/AddStudents'



const Modal = () => {
  return (
    <div className={style.ModalContainer}>
      <h1>MODALS!!!!!!!!!!</h1>
      {/* --- Subjects Modal Start --- */}
        <div className={style.SubjectModalContainer}>
          <div className={style.Modal_1}>
            {/* <h2>ADD SUBJECT</h2>
            <AddSubject />
            <h2>EDIT SUBJECT</h2>
            <EditSubject />
            <h2>ADD TOPIC</h2>
            <AddTopic />
            <h2>EDIT TOPIC</h2>
            <EditTopic /> */}

            {/* ------------------- */}
            {/* <h2>ADD NEW QUESTION</h2>
            <AddNewQuestion /> */}
            {/* <NewQuestionConfirm />
            <ExamSucces /> */}
            {/* <EditExam /> */}
            <AddStudents />


          </div>
        </div>

      {/* --- Subjects Modal End ---  */}
      
    </div>
  )
}

export default Modal
