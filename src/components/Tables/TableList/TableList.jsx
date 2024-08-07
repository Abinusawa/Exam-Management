import React from 'react'
import style from './tabList.module.css'

const TableList = ({SubjectData=[], columns, TopicData=[], QuestionData=[], ExamData=[], StudentListData=[]}) => {
  return (
    <div>
        <div className={style.mainTable}>
            <table>
                <thead className={style.headerTable}>
                    <tr>
                        {columns.map(head => <th>{head.field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {SubjectData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={style.striped}>
                        {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                            {/* Check if the column is for name with image */}
                            {col.field === 'TeacherName' ? (
                            <div style={{display: 'flex', alignItems: 'left', gap: '5px'}}>
                                <img src={row[col.field][0].img} alt={row[col.field][0].text} />
                                {row[col.field][0].text}
                            </div>
                            ): col.field === 'Action' ? (
                                <div style={{display: 'flex', alignItems: 'left', gap: '5px'}}>
                                    <img src={row[col.field][0].img1} alt={row[col.field][0].text} />
                                    <img src={row[col.field][0].img2} alt={row[col.field][0].text} />
                                </div>
                                ) : (
                                // Render other fields normally
                                row[col.field]
                                )}
                        
                        </td>
                        ))}
                    </tr>
                    ))}

                    {TopicData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={style.striped}>
                        {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                     
                            {
                            col.field === 'Action' ? (
                                <div style={{display: 'flex', alignItems: 'left', gap: '5px'}}>
                                    <img src={row[col.field][0].img1} alt={row[col.field][0].text} />
                                    <img src={row[col.field][0].img2} alt={row[col.field][0].text} />
                                </div>
                                ) : (
                                // Render other fields normally
                                row[col.field]
                                )
                                }
                        
                        </td>
                        ))}
                    </tr>
                    ))}

                    {QuestionData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={style.striped}>
                        {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                     
                            {
                            col.field === 'Action' ? (
                                <div style={{display: 'flex', alignItems: 'left', gap: '5px'}}>
                                    <img src={row[col.field][0].img1} alt={row[col.field][0].text} />
                                    <img src={row[col.field][0].img2} alt={row[col.field][0].text} />
                                </div>
                                ) : (
                                // Render other fields normally
                                row[col.field]
                                )
                                }
                        
                        </td>
                        ))}
                    </tr>
                    ))} 

                    {ExamData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={style.striped}>
                        {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                     
                            {
                            col.field === 'Status' ? (
                                    <button style={{ 
                                        backgroundColor: row[col.field] === 'COMPLETED'
                                        ? 'rgba(23, 187, 39, 0.1)'
                                        : row[col.field] === 'ONGOING'
                                        ? 'rgba(0, 40, 253, 0.1)'
                                        : row[col.field] === 'NOTSTARTED'
                                        ? 'rgba(136, 145, 139, 0)'
                                        : '',
                                        color: row[col.field] === 'COMPLETED'
                                        ? 'green'
                                        : row[col.field] === 'ONGOING'
                                        ? 'blue'
                                        : 'rgba(136, 145, 139, 1)',
                                        borderRadius: '4px', 
                                        width: '100px', height: '25px',
                                        border: 'none', fontSize: '12px' }}>
                                        {row[col.field]}
                                    </button>
                                    )
                           
                                : (
                                // Render other fields normally
                                row[col.field]
                                )
                            }
                        
                        </td>
                        ))}
                    </tr>
                    ))} 


                    {StudentListData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={style.striped}>
                        {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                     
                            {(
                                // Render other fields normally
                                row[col.field]
                            )}
                        
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
      
    </div>
  )
}

export default TableList

// col.field === 'Status' ? (
//     <button style={{ backgroundColor: row[col.field] === 'COMPLETED' ? 'green' : 'ONGOING' ? 'Blue' : 'NOT STARTED' ? 'Red',
//                         color: 'white', borderRadius: '4px', 
//                         width: '73px', height: '25px',
//                         border: 'none', fontSize: '12px' }}>
//       {row[col.field]}
//     </button>
//   )
