import React from 'react'
import style from './questionstab.module.css'

import {QuestionListData} from '../../../DataArray/SubjectListsData'
import TableList from '../TableList/TableList'
import Button from '../../Button/Button'


const QuestionTab = () => {
    const columns =[
        {field: "Question_ID", header:'Question_ID'},
        // {field: "img", header:'  '},
        {field: 'QuestionText', header:'QuestionText'},
        {field: "QuestionType", header:'QuestionType'},
        {field: "Subject", header:'Subject'},
        {field: "Topic", header:'Topic'},
        {Action: "Topic", header:'Action'},
      
      ]

  return (
    <div className={style.mainContainer}>
        <div className={style.btnGroup}>
            <p className={style.subjectList}>Subject List</p>
            <div className={style.twoButtons}>
                <Button
                    style={{
                        background: "rgba(0, 40, 253, 1)",
                        // border: "0.5px solid rgba(136, 145, 139, 1)",
                        borderRadius: '6px',
                        // marginTop: "20px",
                        width: '118px',
                        height: '40px',
                        color: "#FFFFFF",
                        // marginLeft:'20px',
                        fontFamily: 'Plus Jakarta Sans',
                        cursor: 'pointer',
                        textTransform: 'capitalize'
                    }}
                    >
                    {/* add an icon for the below  */}
                    Download
                </Button>
                <Button
                    style={{
                        background: "rgba(0, 40, 253, 1)",
                        // border: "0.5px solid rgba(136, 145, 139, 1)",
                        borderRadius: '6px',
                        // marginTop: "20px",
                        width: '118px',
                        height: '40px',
                        color: "#FFFFFF",
                        // marginLeft:'20px',
                        fontFamily: 'Plus Jakarta Sans',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
        
                    }}
                    >
                    {/* add an icon for the below  */}
                    Print
                </Button>
            </div>
        </div>

        <div className={style.tableMain}>
            <TableList QuestionData={QuestionListData}  columns={columns}/> 
            <div className={style.tablePagin}>
                <p className={style.p3}>Showing 1 to 10 of 11 entries</p>
                <div className={style.Btn}>
                    <button className={style.Btn1}>Previous</button>
                    <button className={style.Btn2}>1</button>
                    <button className={style.Btn3}>2</button>
                    <button className={style.Btn4}>Next</button>
                </div>

            </div>
           
        </div>

        
      
    </div>
  )
}

export default QuestionTab




