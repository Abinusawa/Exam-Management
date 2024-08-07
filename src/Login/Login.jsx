// import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './login.module.css'
import data from "../DataArray/usersDB.json";

// Button 
import Button from '../components/Button/Button'
import Inputs from '../components/Inputs/Inputs'

const Login = () => {

    const handleSignUpClick = () => {
        console.log("SIGN UP button clicked");
        // Add your SIGN UP logic here
    };
    const navigate = useNavigate();
    // Form exception
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    // const [token, setToken] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);



        if (email === '' || password === '') {
            setError('Please enter both username and password');
            setTimeout(() => {
                setError('');
            }, 10000); // 10 seconds
            return;
        }

        

        try {
            if (email === data.user.email && password === data.user.password) {
                navigate('/dashboard');
            } else {
                setError('Invalid username or password');
            }

        } catch (error) {
            setError('Error logging in', error);

        }



        // fetch('../usersDB.json', {
        //     method: 'GET',
        //     // body: formData,
        // }).then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         if (data.message === 'Login successful') {
        //             navigate('/dashboard');

        //             // Redirect to dashboard or whatever
        //         } else {
        //             setError(data.message);
        //         }
        //     })
        //     .catch((error) => {
        //         setError('Error logging in', error);
        //         // alert.setError('Error logging in');
        //     });
    };


    return (
        <div className={style.container}>
            <div className={style.loginContainer}>
                {/* The Blue Part  */}
                <div className={style.leftFrame}>
                    <div className={style.contentContainer}>
                        <h2 className={style.welcomeBack}>Welcome back!</h2>
                        <p className={style.subTitle}>To continue, kindly supply your credentials.</p>
                        {/* Button  */}
                        <Button
                            classname={style.userSignUp}
                        >
                            SIGN UP
                        </Button>

                    </div>
                </div>
                {/* The Blue Part ends */}

                <div className={style.rightFrame}>
                    <form onSubmit={handleSubmit} action="" method="">
                        <div className={style.formContainer}>
                            <h1 className={style.signIn}>SIGN IN</h1>
                            <div className={style.userDetails}>
                                <div className={style.UserName}>
                                    <label className={style.label}>USERNAME</label>
                                    <Inputs
                                        type='email'
                                        placeholder='Enter your username'
                                        required
                                        value={email}
                                        className={style.userName}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className={style.Password}>
                                    <label className={style.label}>PASSWORD</label>
                                    <Inputs
                                        type='password'
                                        placeholder='Enter your password'
                                        required
                                        className={style.userPassword}
                                        // value={password} 
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                            </div>
                            <br />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <div className={style.btn__mobile}>
                                <Button
                                    type="submit"
                                    onClick={handleSignUpClick}
                                    classname={style.userSignIn}
                                >
                                    SIGN IN
                                </Button>
                                <Button

                                    classname={style.userSignUp_Mobile}
                                >
                                    SIGN IN
                                </Button>

                            </div>

                            <div className={style.loginSetting}>
                                <div className={style.checkBox}>
                                    <input type="checkbox" />
                                    <p className={style.rememberMe}>Remember me</p>
                                </div>
                                <p className={style.forgotPassword}>Forgot password?</p>
                            </div>




                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
