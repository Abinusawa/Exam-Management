import React from 'react'
import style from './dashboard.module.css'
import CardList from '../components/Cards/CardList/CardList'
import {dashboardSummary, AllExamSummary, CompletedExams} from '../DataArray/dashboardSummary'

const Dashboard = () => {
  return (
    <div className={style.Container}>
        <div className={style.innerHug}>
            <div className={style.TitleContainer}>
                <h3 className={style.Welcome}>Welcome Rose</h3>
                <p className={style.subTitle}>Home</p>
            </div>
            <div className={style.DashboardSummary}>
                <CardList summarydata={dashboardSummary} />
            </div>

            <div className={style.ExamInfo}>
                <div className={style.leftSide}>
                    <div className={style.ExamDetails}>
                        <CardList examInfoData={AllExamSummary} />                       
                    </div>

                    {/* <div className={style.Activity}>
                        <div className={style.activityTitle}>
                            <p className={style.recentActivities}>Recent Activities <i className={style.today}>Today</i></p>
                            <p className={style.viewAll}>View all</p>
                        </div>
                        <div className={style.hrLine}></div>
                        <div className={style.activitySummary}>
                           {/* call cards for this  
                        </div>

                    </div> */}
                </div>

                <div className={style.rightSide}>
                  
                        <div className={style.completedExamDetails}>
                            <CardList completedExamInfo={CompletedExams} />
                        </div>
                    
                </div>
            </div>
        </div>
       
      
    </div>
  )
}

export default Dashboard
