import React from 'react'
import { Routes, Route } from "react-router-dom";
import style from './allpages.module.css'



import Navbar from '../components/Navbar/Nav'
import SidebarDash from '../components/SidebarDashboard/SidebarDash';

import Dashboard from '../ExamDashboard/Dashboard'
import SubjectList from  '../Subjects/SubjectList/SubjectList'
import Topics from '../Subjects/TopicList/Topics'
import QuestionBank from '../Subjects/QuestionBank/QuestionBank'
import Exams from '../Exams/Exams'
import AddExam from '../Exams/AddExam/AddExam'

import Modals from '../components/Modals/Modals'
import ExamPreview from '../Exams/AddExam/AddExamPreview/ExamPreview';

import StudentsList from '../Students/StudentsList';
import ViewExam from '../Students/ViewExam';


const AllPages = () => {
  return (
  
    <div className={style.AllComponents}>

      <div className={style.sidebarContainer}>
        <SidebarDash />
      </div>
      <div className={style.LeftContainer}>
        <div className={style.NavbarContainer}>
          <Navbar />
        </div>
        <div className={style.Routes}>
          <Routes >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subjectlist" element={<SubjectList />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/question-bank" element={<QuestionBank />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/addexam" element={<AddExam />} />
            <Route path="/exam-preview" element={<ExamPreview />} />
            <Route path="/students-list" element={<StudentsList />} />
            <Route path="/viewExam-student" element={<ViewExam />} />

            

            {/* --- MODAL/POPOVERS --- */}
            <Route path="/Modals" element={<Modals />} />
            {/* <Modals /> */}        

          </Routes>

        </div>


      </div>
    </div>
    

  )
}

export default AllPages
