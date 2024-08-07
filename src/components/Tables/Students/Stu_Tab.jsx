import React from 'react'
import style from './stu_Tab.module.css'

import { studentsData } from '../../../DataArray/Students_List'
import TableList from '../TableList/TableList'
import Button from '../../Button/Button'


const Stu_Tab = () => {
    const columns =[
        {field: "StudentID", header:'StudentID'},
        // {field: "img", header:'  '},
        {field: 'Name', header:'Name'},
        {field: "Class", header:'Class'},
        {field: "Phone", header:'Phone'},
        {field: "Email", header:'Email'},
        {field: "AssignedExams", header:'AssignedExams'},
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
            <TableList StudentListData={studentsData}  columns={columns}/> 
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

export default Stu_Tab

