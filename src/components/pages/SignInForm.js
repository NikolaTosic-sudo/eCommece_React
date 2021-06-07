import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SignInForm = () => {

    // State and handlers for password and email that we get from user using form below

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    };

    // Submit handler currently is using real data but dummy database

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://fakestoreapi.com/auth/login',{
            body:JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json));

    };
        return (
            <div className="FormCenter">

                <form className="FormFields" onSubmit={handleSubmit}>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your E-Mail" name="email" value={email} onChange={handleChangeEmail}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={handleChangePassword}/>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20"><a href='/' style={{color: 'white'}}>Sign In</a></button>
                        <Link to="/sign-up" className="FormField__Link">Create an account</Link>
                    </div>

                </form>

            </div>
        )
    };

export default SignInForm