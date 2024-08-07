import React from 'react'
import style from './addNew.module.css'
import Button from '../../../Button/Button'


const NewQuestionConfirm = () => {
  return (
    <div className={style.ConfirmContainer}>
         <div action={onclick=close} 
            style={{width: '70px', 
            height: '30px', 
            fontSize: '14px', 
            padding: '2px 0px 0px 13px'
            }} className={style.Close}
         >Close</div>
      <div className={style.innerContainer}>
        <h3 className={style.confirmAction}>New Exam  will be Added</h3>
        <div className={style.actBtns}>
            <Button 
			action={onclick=close}
			style={{
			background: "white",
			border: "0.5px solid blue",
			borderRadius: '6px',
			// marginTop: "20px",
			width: '130px',
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

			<Button
			
				style={{
				background: "rgba(0, 40, 253, 1)",
				// border: "0.5px solid rgba(136, 145, 139, 1)",
				borderRadius: '6px',
				// marginTop: "20px",
				width: '130px',
				height: '45px',
				color: "#FFFFFF",
				// marginLeft:'20px',
				fontFamily: 'Plus Jakarta Sans',
				cursor: 'pointer'
				}}
				>
				{/* add an icon for the below  */}
				Confirm
			</Button>

        </div>


      </div>

    </div>
  )
}

export default NewQuestionConfirm
