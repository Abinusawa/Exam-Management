import React from 'react'
import style from './completed.module.css'
import Button from '../../Button/Button'

const CompletedExam = ({ Title, clockimg, time, dateimg, date, status}) => {
  return (
        <div className={style.container}>
            <div className={style.rightSideTitle}>
                <p className={style.completedExams}>Completed Exams</p>
                <p className={style.viewAll_2}>View all</p>
            </div>
            <div className={style.Inner_container}>
                <div className={style.innerHug}>
                    <div className={style.Title}>{Title}</div>
                    <Button
                        style={{
                            background: "none",
                            border: "2px solid rgba(136, 145, 139, 1)",
                            borderRadius: '5px',
                            marginTop: "20px",
                            width: '145px',
                            height: '40px',
                            color: "rgba(136, 145, 139, 1)",
                        }}
                        >
                        Class: Primary 6
                    </Button>
                    <div className={style.scheduleDateTime}>
                        <div className={style.start}>
                            {/* <p className={style.startText}>Start</p> */}
                            <img className={style.clockimg} src={clockimg} alt="" />
                            <p className={style.timeText}>{time}</p>
                            <img className={style.dateimg} src={dateimg} alt="" />
                            <p className={style.dateText}>{date}</p>
                        </div>
            
                        <div className={style.Status}>
                            <p className={style.statusText}>Status: {status}</p>
                        </div>
                    </div>
                </div>
                <Button classname={style.viewBtn__green}>
                    View Details
                </Button>
        </div>

    </div>
  )
}

export default CompletedExam
