import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SignUpForm = () => {

    // State and handlers for name, username, email, password and whether user agreed on TOS that we get from user using form bellow

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasAgreed, setHasAgreed]  = useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value)
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleChangeHasAgreed = (e) => {
        setHasAgreed(e.target.checked)
    };

    // Submit handler currently is using real data but dummy database

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/users',{
            body:JSON.stringify(
                {
                    email: email,
                    username: username,
                    password: password,
                    name: name,
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    };

        return (
            <div className="FormCenter">

                <form className="FormFields" onSubmit={handleSubmit}>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={name} onChange={handleChangeName}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Username</label>
                        <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={username} onChange={handleChangeUsername}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your E-Mail" name="email" value={email} onChange={handleChangeEmail}/>
                    </div>


                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={handleChangePassword}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={hasAgreed} onChange={handleChangeHasAgreed}/> I agree to all statements in <Link to="#" className="FormField__TermsLink">terms of service</Link>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20"><a href='/' style={{color: 'white'}}>Sign Up</a></button>
                        <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                    </div>

                </form>

            </div>
        )
}

export default SignUpForm