import React from 'react'
import style from './addexam.module.css'
import Inputs from '../../components/Inputs/Inputs'
import Button from '../../components/Button/Button'
// import { useState } from 'react'
import { Link } from "react-router-dom";


const AddExam = () => {
  return (
    <div className={style.Container}>
        <div className={style.HeaderTitles}>
            <h1 className={style.Exam}>Exam</h1>
            <p className={style.subTitle}>Exam / AddNewExam</p>
        </div>
        <div className={style.basicDetails}>
            <div className={style.checkbox}>
                <input type="checkbox"
                className={style.checkboxShoo}
                style={{
                    borderRadius: '0px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    cursor: 'pointer'
                }}
                />
                <p className={style.checkboxText}>Basic Details</p>
            </div>
   
            {/* Add a popover to the below element  */}
            <div className={style.previewgroup}>
                <div className={style.circle}>&#63;</div>
                <div className={style.preview}> Preview</div>
            </div>
        </div>
        <div className={style.mainBody}>
            <form className={style.form} action="" method="post">
                <div className={style.DetailsInput}>
                    <h4 className={style.ExamDetails}>Exam Details</h4>
                    <div className={style.forminputs}>
                        
                        <div className={style.input}>
                            <p className={style.input1Label}>Exam Name</p>
                            <Inputs 
                                
                                type='text'
                                placeholder='Search'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '320px',
                                    height: '50px',
                                    fontSize: '16px',
                                }}
                            
                            />
                        </div>

                        <div className={style.input}>
                            <p className={style.input1Label}>Exam ID</p>
                            <Inputs 
                                
                                type='text'
                                placeholder='Search'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '320px',
                                    height: '50px',
                                    fontSize: '16px'
                                }}
                            
                            />
                        </div>

                        <div className={style.input}>
                            <p className={style.input1Label}>Exam Subject</p>
                            <Inputs 
                                
                                type='text'
                                placeholder='Search'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '320px',
                                    height: '50px',
                                    fontSize: '16px'
                                }}
                            
                            />
                        </div>

                        <div className={style.input}>
                            <p className={style.input1Label}>Exam Topic</p>
                            <Inputs 
                                
                                type='text'
                                placeholder='Search'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '320px',
                                    height: '50px',
                                    fontSize: '16px'
                                }}
                            
                            />
                        </div>

                    </div>
                </div>

                <div className={style.scheduleInput}>
                <h4 className={style.ExamDetails}>Schedule</h4>
                    <div className={style.forminputs}>
                        
                        <div className={style.inputSchedule}>
                            <p className={style.input1Label}>Date</p>
                            <Inputs 
                                
                                type='date'
                                placeholder='date'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '200px',
                                    height: '50px',
                                    fontSize: '16px',
                                }}
                            
                            />
                        </div>

                        <div className={style.inputSchedule}>
                            <p className={style.input1Label}>Time</p>
                            <Inputs 
                                
                                type='time'
                                placeholder='Time'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '200px',
                                    height: '50px',
                                    fontSize: '16px'
                                }}
                            
                            />
                        </div>

                    </div>
                </div>

                <div className={style.QuestionInput}>
                    <h4 className={style.ExamDetails}>Question and Marks</h4>
                    <div className={style.forminputs}>
                        
                        <div className={style.input}>
                            <p className={style.input1Label}>Question</p>
                            <Inputs 
                                
                                type='text'
                                placeholder='change this to dropdown'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '320px',
                                    height: '50px',
                                    fontSize: '16px',
                                }}
                            
                            />
                        </div>

                        <div className={style.input}>
                            <p className={style.input1Label}>Time</p>
                            <Inputs 
                                
                                type='text'
                                placeholder='change to dropdown'
                                style={{
                                    border: '1px solid rgba(228, 221, 221, 1)',
                                    width: '320px',
                                    height: '50px',
                                    fontSize: '16px'
                                }}
                            
                            />
                        </div>

                    </div>
                </div>

                <div className={style.FileInput}>
                    <h4 className={style.UploadDetails}>Upload Manually</h4>
                    <div className={style.fileinputs}>
                        
                        <div className={style.inputUpload}
                        
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '8px 12px',
                                border: '1px solid rgba(228, 221, 221, 1)',
                                width: '400px',
                                height: '50px',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}>
                                
                                <span style={{ color: '#888'}}>Upload</span>
                                <input
                                type="file"
                                // ref={fileInputRef}
                                // onChange={onChange}
                                
                                />
                       
                        </div>


                    </div>
                </div>

                <div className={style.formButtons}>
                    <Button
                        style={{
                            background: "white",
                            border: "0.5px solid blue",
                            borderRadius: '6px',
                            // marginTop: "20px",
                            width: '135px',
                            height: '45px',
                            color: "blue",
                            // marginLeft:'20px',
                            fontFamily: 'Plus Jakarta Sans',
                            cursor: 'pointer'
                        }}
                        >
                        {/* add an icon for the below  */}
                        Cancel
                    </Button>

                    <Link to='/exam-preview'>
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
                            Continue
                        </Button>
                    </Link>
                </div>
                
            </form>
        </div>

    </div>
  )
}

export default AddExam
