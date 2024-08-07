import React from 'react'
import style from './summary.module.css'

const SummaryCard = ({ Title, img, amount}) => {
  return (
    <div className={style.container}>
        <div className={style.cardContainer}>
            <div className={style.leftSide}>
                <div className={style.Title}>{Title}</div>
                <div className={style.amount}>{amount}</div>
            </div>
            <div className={style.rightSide}>
              <img className={style.imgProp} alt='' src={img} />
            </div>
        </div>
      
    </div>
  )
}

export default SummaryCard
