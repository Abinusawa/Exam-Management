import React from 'react'
import style from './addNew.module.css'
// import Inputs from '../../../Inputs/Inputs'
import Button from '../../../Button/Button'
import Options from './options.png'
import TrashBin from '../../../../assets/trash1.png'
import ContentCopy from '../../../../assets/contentCopy.png'

const AddNewQuestion = () => {
  return (
    <div className={style.AddSubContainer}>
        <div action={onclick=close} className={style.Close}>Close</div>
        <h2 className={style.AddSubject}>Add New Question</h2>
        <form className={style.form} action="" method="post">
            <div className={style.inputsContainer}>
                <div className={style.inputContents}>
                    <div className={style.subjectDrpdwn}>
                        <p className={style.Subject}>Subject</p>
                        <p className={style.iconSub}>icon</p>
                        {/* Add a dropdownMenu !!!!!! */}
                    </div>
                    <div className={style.formBox}>
                        <div className={style.fomatArea}>
                            <div className={style.formatOpt}>
                                <textarea
                                type="text"
                                className=''            
                                placeholder='Question'
                                // onChange={handleChange}
                                required
                                />
                                <strong className={style.formatOptions}>
                                    <p className={style.BoldText}>B</p>
                                    <p className={style.underline}>U</p>
                                    <i className={style.Italics}>I</i>
                                </strong>
                            </div>

                            <div className={style.questionType}>
                                <Button 
                                    style={{
                                        border: '2px solid rgba(228, 221, 221, 1)',
                                        width: '184px',
                                        height: '48px',
                                        fontSize: '16px',
                                        textTransform: 'capitalize',
                                        color: 'rgba(136, 145, 139, 1)',
                                        display: 'flex',
                                        gap: '10px',
                                        paddingTop: '15px'
                                    }}
                                >
                                    {/* change the button to a dropdownMenu  */}
                                    <div className={style.elipse}></div>
                                    Question Type
                                </Button>
                                    
                            </div>


                        </div>
                        {/* Question Area  */}
                        <div className={style.questionOptions}>
                            {/* use image for the mean time b4 implementation  */}
                            <img src={Options} alt="" />
                        </div>
                        <div className={style.hrLine}></div>
                        {/* Actions on question  */}
                        <div className={style.actionIcons}>
                            <img className={style.actionicon} src={ContentCopy} alt="" />
                            <img className={style.actionicon} src={TrashBin} alt="" />
                        </div>

                    </div>
                </div>

                <div className={style.actBtnContainer}>
                    <Button
                    style={{
                        width: '130px',
                        height: '50px',
                        color: 'Blue',
                        background: 'none',
                        border: '2px solid blue',                       
                        // marginTop: '160px',
                        // marginLeft: '470px',
                        textTransform: 'capitalize',
                        cursor: 'pointer'

                    }}
                    >
                        Cancel
                    </Button>

                    <Button
                    style={{
                        width: '130px',
                        height: '50px',
                        color: '#FFFFFF',
                        backgroundColor: 'Blue',
                        textTransform: 'capitalize',
                        cursor: 'pointer'

                    }}
                    >
                        Continue
                    </Button>

                    

                </div>
            </div>
            <div className={style.inputSettings}>
                {/* Add button Icons later  */}
                <Button
                    style={{
                        width: '154px',
                        height: '48px',
                        color: '#FFFFFF',
                        backgroundColor: 'Blue',
                        textTransform: 'capitalize',
                        cursor: 'pointer'                      

                    }}
                    >
                    Add New Question
                </Button>
                <Button
                    style={{
                        width: '154px',
                        height: '48px',
                        color: '#FFFFFF',
                        backgroundColor: 'Blue',
                        textTransform: 'capitalize',
                        cursor: 'pointer',
                        marginTop: '10px'

                    }}
                    >
                    Import Question
                </Button>
                <Button
                    style={{
                        width: '154px',
                        height: '48px',
                        color: '#FFFFFF',
                        backgroundColor: 'Blue',
                        textTransform: 'capitalize',
                        cursor: 'pointer',
                        marginTop: '10px'

                    }}
                    >
                    Add Image
                </Button>

            </div>
        </form>
    </div>
  )
}

export default AddNewQuestion
