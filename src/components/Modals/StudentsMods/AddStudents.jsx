import React from 'react'
import style from './styles.module.css'

import Inputs from '../../Inputs/Inputs'
import Button from '../../Button/Button'

import uploadCam from '../../../assets/camera.svg'

const AddStudents = () => {
    const inputStyles = {
        border: '2px solid rgba(228, 221, 221, 1)',
        width: '315px',
        height: '50px',
        fontSize: '16px',
        marginTop: '10px'
      };
  return (
    <div>
        <main className={style.container}>
            <div action={onclick=close} 
                    style={{width: '70px', 
                    height: '30px', 
                    fontSize: '14px', 
                    padding: '2px 0px 0px 13px'
                    }} className={style.Close}
                >Close
            </div>

            <section className={style.sectionWrapper}>
                <h2 className={style.section_title}>Add Student</h2>
                <form className={style.form} action="" >
                    <div className={style.formContainer}>
                        <p className={style.formHeader}>Student Details</p>

                        <div className={style.upload}>
                            <div className={style.uploadcanvas}>
                                <div className={style.uploadBtn}>
                                    <div className={style.uploadWrapper}>
                                        <Inputs type='file'/>
                                        <img style ={{height: '15px'}} src={uploadCam} alt="" />
                                        <p className={style.uploadtext}>Upload Photo</p>
                                    </div>
                                </div>
                            </div>

                            <p className={style.instructionText}>
                                Image size should be under 5MB and 
                                image ration needs to be 1:1
                            </p>
 
                        </div>

                        <div className={style.StudentDetails}>

                            <div className={style.Stu_Details}>
                                <label htmlFor="">Student ID</label>
                                <Inputs 
                                    type='text'
                                    placeholder='Search'
                                    style={inputStyles}
                                />
                            </div>

                            <div className={style.Stu_Details}>
                                <label htmlFor="">Student Name</label>
                                <Inputs 
                                    type='text'
                                    placeholder='Search'
                                    style={inputStyles}
                                />
                            </div>

                            <div className={style.Stu_Details}>
                                <label htmlFor="">Student Class</label>
                                <Inputs 
                                    type='text'
                                    placeholder='Class'
                                    style={inputStyles}
                                />
                            </div>

                            <div className={style.Stu_Details}>
                                <label htmlFor="">Student Mail</label>
                                <Inputs 
                                    type='email'
                                    placeholder='Email'
                                    style={inputStyles}
                                />
                            </div>

                            <div className={style.Stu_Details}>
                                <label htmlFor="">Phone</label>
                                <Inputs 
                                    type='text'
                                    placeholder='Enter Phone Number'
                                    style={inputStyles}
                                />
                            </div>

                            <div className={style.Stu_Details}>
                                <label htmlFor="">Assigned Exam</label>
                                <Inputs 
                                    type='text'
                                    placeholder='Assigned Exam'
                                    style={inputStyles}
                                />
                            </div>

                        </div>

                        <div className={style.Submit__btn}>
                            <Button
                
                                style={{
                                background: "rgba(0, 40, 253, 1)",
                                // border: "0.5px solid rgba(136, 145, 139, 1)",
                                borderRadius: '6px',
                                marginTop: "50px",
                                width: '130px',
                                height: '50px',
                                color: "#FFFFFF",
                                fontFamily: 'Plus Jakarta Sans',
                                cursor: 'pointer'
                                }}
                                >
                                {/* add an icon for the below  */}
                                Submit
                            </Button>
                            
                        </div>

                    </div>

                </form>


            </section>
            

        </main>
      
    </div>
  )
}

export default AddStudents
