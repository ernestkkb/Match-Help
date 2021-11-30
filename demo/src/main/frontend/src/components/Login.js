import React from 'react'
import '../index.css'

export default function Login(){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = e => {
        e.preventDefault();

        
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div className = 'form-inner'>
                <h2>Welcome!</h2>
                <div className = 'form-group'>
                    <label htmlFor = "email">Email:</label>
                    <input type = "text" name = "email" id = "email" onChange = {(e) => setEmail(e.target.value)} value = {email}/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = "password">Password:</label>
                    <input type = "password" name = "password" id = "password" onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                </div>
                <input type = 'submit' value="Login" disabled={!validateForm()}/>
            </div>
        </form>
    );
}