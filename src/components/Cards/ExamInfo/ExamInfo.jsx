import React from 'react'
import style from './examinfo.module.css'
import Button from '../../Button/Button'

const ExamInfo = ({ Title, clockimg, time, dateimg, date, status}) => {
  return (
    <div className={style.container}>
         <div className={style.Top_Title}>
            <p className={style.examsAvailable}>Exam</p>
            <p className={style.viewAll}>View all</p>
        </div>
        <div className={style.Inner_container}>
            <div className={style.innerHug}>
                <div className={style.Title}>{Title}</div>
                <Button classname={style.ExamButton}   >
                    Class: Primary 6
                </Button>
                <div className={style.scheduleDateTime}>
                    <div className={style.start}>
                        <p className={style.startText}>Start</p>
                        <img className={style.clockimg} src={clockimg} alt="" />
                        <p className={style.timeText}>{time}</p>
                        <img className={style.dateimg} src={dateimg} alt="" />
                        <p className={style.dateText}>{date}</p>
                    </div>
                    <div className={style.end}>
                        <p style={{marginRight: '8.5px'}} className={style.endText}>End</p>
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
            <Button  classname={style.ViewDetails_Button}>
                View Details
            </Button>
        </div>

    </div>
  )
}

export default ExamInfo
