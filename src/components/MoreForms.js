import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstName,lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    };

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }
//validating  form
    return(
        <div>
            <form onSubmit={ createUser } style ={{marginTop:"20px"}}>
                {
                hasBeenSubmitted ?
                <h3>Thank you for submiting the form!</h3>:
                <h3>Welcome, please submit the form.</h3>
                }
                <div style={inputDataDivStyle}>
                    <label htmlFor="firstName">First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
                </div >
                {firstName.length<2 && firstName.length>0 ? (<p>First Name must be at least 2 character</p>): null}
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setlastName(e.target.value) } />
                </div>
                {lastName.length<2 && lastName.length>0 ? (<p>Last Name must be at least 2 character</p>): null}

                <div style={inputDataDivStyle}>
                    <label htmlFor='email'>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {email.length<5 && email.length>0 ? (<p>Email must be at least 5 characters</p>): null}

                <div style={inputDataDivStyle}>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {password.length<8 && password.length>0 ? (<p>password must be at least 8 characters</p>): null}

                <div style={inputDataDivStyle}>
                    <label htmlFor="confirmPassord">Confirm Password:</label>
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </div>
                {confirmPassword !== password ? (<p>Password must match</p>): null}
            <input type="submit" value="Create User" />
            </form>

            <h2>Your Form Data</h2>
            <h3>First Name</h3>
            <span>{firstName}</span>
            <h3>Last Name</h3>
            <span>{lastName}</span>
            <h3>Email</h3>
            <span>{email}</span>
            <h3>Password</h3>
            <span>{password}</span>
            <h3>Confirm Password</h3>
            <span>{confirmPassword}</span>
            
        </div>
        )
    }
export default UserForm;
