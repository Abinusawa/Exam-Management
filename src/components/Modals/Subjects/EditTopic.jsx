import React from 'react'
import style from './Sub.module.css'
import Inputs from '../../Inputs/Inputs'
import Button from '../../Button/Button'

const EditTopic = () => {
  return (
    <div className={style.AddSubContainer}>
        <div action={onclick=close} className={style.Close}>Close</div>
        <h2 className={style.AddSubject}>Edit Topic</h2>
        <div className={style.bodyContainer}>
            <p className={style.subDetails}>Topic Details</p>
            <form className={style.formContainer} action="">
                <div className={style.formInputs}>
                    <div className={style.input}>
                        <p className={style.input1Label}>Topic ID</p>
                        <Inputs 
                            
                            type='text'
                            placeholder='Search'
                            style={{
                                border: '2px solid rgba(228, 221, 221, 1)',
                                width: '299px',
                                height: '54px',
                                fontSize: '16px'
                            }}
                          
                        />
                    </div>
                    <div className={style.input}>
                        <p className={style.input1Label}>Topic Name</p>
                        <Inputs 
                            
                            type='text'
                            placeholder='Search'
                            style={{
                                // border: '0px solid rgba(228, 221, 221, 1)',
                                width: '299px',
                                height: '54px',
                                fontSize: '16px'
                            }}
                          
                        />
                    </div>
                    <div className={style.input}>
                        <p className={style.input1Label}>Teacher in charge</p>
                        <Inputs 
                            
                            type='text'
                            placeholder='Search'
                            style={{
                                // border: '1px solid rgba(228, 221, 221, 1)',
                                width: '299px',
                                height: '54px',
                                fontSize: '16px'
                            }}
                          
                        />
                    </div>
                    <div className={style.input}>
                        <p className={style.input1Label}>Class</p>
                        <Inputs 
                            
                            type='text'
                            placeholder='Search'
                            style={{
                                // border: '1px solid rgba(228, 221, 221, 1)',
                                width: '299px',
                                height: '54px',
                                fontSize: '16px'
                            }}
                          
                        />
                    </div>
                </div>
                {/* put button  */}
                <div className={style.editActions}>
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
                        Update
                    </Button>

                    

                </div>
            </form>
        </div>      
    </div>
  )
}

export default EditTopic
