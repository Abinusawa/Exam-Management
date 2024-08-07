import React from 'react'
import style from './subTable.module.css'

import {SubListData} from '../../../DataArray/SubjectListsData'
import TableList from '../TableList/TableList'
import Button from '../../Button/Button'


const SubjectTable = () => {
    const columns =[
        {field: "Subject_ID", header:'Subject ID'},
        // {field: "img", header:'  '},
        {field: 'Subject', header:'Subject'},
        {field: "TeacherName", header:'TeacherName'},
        {field: "Class", header:'Class'},
        {field: "Students", header:'Students'},
        {field: "TotalMarks", header:'TotalMarks'},
        {field: "Action", header:'Action'},
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
            <TableList SubjectData={SubListData}  columns={columns}/> 
            <div className={style.tablePagin}>
                <div className={style.paginText}>
                    <p className={style.p3}>Showing 1 to 10 of 11 entries</p>
                </div>
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

export default SubjectTable
