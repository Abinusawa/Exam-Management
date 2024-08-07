import React from 'react'
import style from './addNew.module.css'
import Button from '../../../Button/Button'


const ExamSucces = () => {
  return (
    <div className={style.successContainer}>
        <div action={onclick=close} 
                style={{width: '70px', 
                height: '30px', 
                fontSize: '14px', 
                padding: '2px 0px 0px 13px'
                }} className={style.Close}
            >Close

            <div style={{
                width: '630px',
                height: '278px',
                marginTop: '262px',
                marginLeft: '20px',
                // border: '2px solid green'
            }}>
                <h3 className={style.successTitle}>Second Term Exam Successfully Created</h3>
                <p className={style.successText}>New Exam for Social Studies Subject Added Succesfully with the following Name : Second Term 2023/34 Exam.</p>
                <Button
			
                    style={{
                    background: "rgba(0, 40, 253, 1)",
                    // border: "0.5px solid rgba(136, 145, 139, 1)",
                    borderRadius: '6px',
                    marginTop: "50px",
                    width: '306px',
                    height: '50px',
                    color: "#FFFFFF",
                    marginLeft:'155px',
                    fontFamily: 'Plus Jakarta Sans',
                    cursor: 'pointer'
                    }}
                    >
                    {/* add an icon for the below  */}
                    Confirm
			    </Button>


            </div>
         </div>
      
    </div>
  )
}

export default ExamSucces
