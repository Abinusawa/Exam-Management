import React from 'react'
import style from './exams.module.css'
import Button from '../components/Button/Button'
import Inputs from '../components/Inputs/Inputs'
import ExamsTab from '../components/Tables/ExamsTable/ExamsTab'
import { Link } from "react-router-dom";


const Exams = () => {
  return (
    <div className={style.container}>
        <div className={style.titleContainer}>
            <h3 className={style.subject}>Exam</h3>
            <p className={style.subSubList}>Exam / Exam List</p>
        </div>
        <div className={style.buttonGroup}>
            <Link to='/addexam'>
                <Button
                    style={{
                        background: "rgba(0, 40, 253, 1)",
                        border: "0.5px solid rgba(136, 145, 139, 1)",
                        borderRadius: '6px',
                        // marginTop: "20px",
                        width: '195px',
                        height: '45px',
                        color: "#FFFFFF",
                        // marginLeft:'20px',
                        fontFamily: 'Plus Jakarta Sans',
                        cursor: 'pointer'
                    }}
                    >
                    {/* add an icon for the below  */}
                    Add New Exam
                </Button>
            </Link>
            <div className={style.farLeft}>
                <Inputs 
                    type='text'
                    placeholder='Search'
                    style={{
                        border: '2px solid rgba(228, 221, 221, 1)',
                        width: '363px',
                        height: '45px',
                        fontSize: '16px'
                    }}
                />
                <Button
                    style={{
                        background: "rgba(0, 40, 253, 1)",
                        border: "0.5px solid rgba(136, 145, 139, 1)",
                        borderRadius: '6px',
                        // marginTop: "20px",
                        width: '135px',
                        height: '45px',
                        color: "#FFFFFF",
                        // marginLeft:'20px',
                        fontFamily: 'Plus Jakarta Sans',
                        cursor: 'pointer'
                    }}
                    >
                    {/* add an icon for the below  */}
                    Search
                </Button>
            </div>
        </div>

        <div className={style.tableContainer}>
            <ExamsTab />
        </div>

    </div>
  )
}

export default Exams
