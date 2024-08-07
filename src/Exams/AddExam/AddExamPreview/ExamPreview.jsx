import React from 'react'
import style from './Preview.module.css'
import ClockIcon from '../../../assets/dashboardAssets/timeClock.png'
import ClaendarIcon from '../../../assets/calendar.png'
import Button from '../../../components/Button/Button'

const ExamPreview = () => {
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
            <h2 className={style.previewTitle}>Preview</h2>
            <div className={style.previewBody}>
                <form className={style.previewForm} action="" method="post">
                    <div className={style.formInnerContainer}>
                        <div className={style.formHeader}>
                            <h3 className={style.formTitle}>Second Term  2023/24 Exam</h3>
                            <h3 className={style.formSubject}>Subject: <p style={{color: ' rgba(136, 145, 139, 1)'}}>Social studies</p></h3>
                        </div>

                        <h3 className={style.MaxMark}>Maximum Mark: <p style={{color: 'Blue'}}>100</p></h3>

                        <div className={style.scheduler}>
                            <h3 className={style.schedules}>Schedule</h3>
                            <div className={style.flexDateTime}>
                                <div className={style.date}>
                                    <img className={style.imgicons} src={ClaendarIcon} alt="date" />
                                    <p className={style.datetext}>20-01-2024</p></div>
                                <div className={style.time}><img className={style.imgicons} src={ClockIcon} alt="time" />
                                <p className={style.timetext}>10:56 AM</p></div>
                            </div>
                        </div>

                        <div className={style.QuestionPreview}>
                            <h3 className={style.Question}>Questions Uploaded</h3>
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
                            Back
                        </Button>

                        <Button
                            style={{
                                background: "blue",
                                border: "0.5px solid blue",
                                borderRadius: '6px',
                                // marginTop: "20px",
                                width: '135px',
                                height: '45px',
                                color: "white",
                                // marginLeft:'20px',
                                fontFamily: 'Plus Jakarta Sans',
                                cursor: 'pointer'
                            }}
                            >
                            {/* add an icon for the below  */}
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ExamPreview
