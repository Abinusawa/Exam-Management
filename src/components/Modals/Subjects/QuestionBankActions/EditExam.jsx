import React from 'react'
import style from './editexam.module.css'
import Inputs from '../../../Inputs/Inputs'
import Multi_Inputs from '../../../Inputs/MultipleInputs/Multi_Inputs';
import { E_SubjectOptions, E_TopicOptions } from '../../../../DataArray/Options';



const EditExam = () => {

const inputStyles = {
  border: '2px solid rgba(228, 221, 221, 1)',
  width: '315px',
  height: '50px',
  fontSize: '16px'
};

const [selectedOptions, setSelectedOptions] = React.useState([]);

const handleSelectChange = (event) => {
  const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
  setSelectedOptions(selectedOptions);
};

  return (
    <div className={style.Container}>
        <div action={onclick=close} 
                style={{width: '70px', 
                height: '30px', 
                fontSize: '14px', 
                padding: '2px 0px 0px 13px'
                }} className={style.Close}
            >Close
        </div>

        <div className={style.innerContainer}>
          <h2 className={style.editExam}>Edit Exam</h2>
          <form action="" method="post">
            <div className={style.formContainer}>
              <div className={style.ExamDetails}>
                <p className={style.examdetails}>Exam Details</p>
                <div className={style.examdetails_details}>
                  <div className={style.inputDetails}>

                    <div className={''}>
                      <p className={style.input1Label}>Topic ID</p>
                      <Inputs 
                        type='text'
                        placeholder='Search'
                        style={inputStyles}
                      />
                    </div>
                    <div className={''}>
                      <p className={style.input1Label}>Topic ID</p>
                      <Inputs 
                        type='text'
                        placeholder='Search'
                        style={inputStyles}
                      />
                    </div>

                    <div className={""}>
                      <p className={style.input1Label}>Subjects</p>
                      <Multi_Inputs
                        options={E_SubjectOptions[0].Subjects}
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        style={{
                          width: '315px',
                          height: '50px',
                          borderRadius: '6px'

                        }}
                      />
                    </div>
                    <div className={""}>
                      <p className={style.input1Label}>Topics</p>
                      <Multi_Inputs
                        options={E_TopicOptions[0].Topics}
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        style={{
                          width: '315px',
                          height: '50px',
                          borderRadius: '6px',
                          marginBottom: '250px'

                        }}
                      />
                    </div>

                  </div>
              
                </div>
              </div>

              <div className={style .Schedule_Details}>
                <p className={style.schedule}>Schedule</p>
                <div className={style.Date_Time}>
                  <div className={style.Date_C}>
                    <p className={style.Date}>Date</p>
                    <Inputs 
                      type='date'
                      placeholder='date'
                      style={{
                          border: '1px solid rgba(228, 221, 221, 1)',
                          width: '300px',
                          height: '50px',
                          fontSize: '16px',
                      }}
                    
                    />
                  </div>

                  <div className={style.Time_C}>
                    <p className={style.Time}>Time</p>
                    <Inputs 
                      type='time'
                      placeholder='Time'
                      style={{
                          border: '1px solid rgba(228, 221, 221, 1)',
                          width: '300px',
                          height: '50px',
                          fontSize: '16px',
                      }}
                    
                    />
                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>

    </div>
  )
}

export default EditExam
