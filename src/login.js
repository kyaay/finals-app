import React, {useState} from 'react'
import { CartContext } from './App';
import App from './App'
// import axios from 'axios'
import './Styles/login.scss';

const Login = () =>{
    const { loginStatus, setLoginStatus } = React.useContext(CartContext);
    const [message, setMessage] = useState('');
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const handleUserInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const handleLogin = async () => {
        const url = 'https://reqres.in/api/login';
        const params = {
            "email": userInfo.email,
            "password": userInfo.password
        }
        console.log(params);

        try{
            const response = await axios.post(url, params);
            if(response){
                console.log(response.data);
                setMessage("");
                setLoginStatus(true);
            }
        } catch (error) {
            setMessage("Invalid email and password.");
            console.log(error);
        }
    }

    return(
        <div className='body'>
            <div class="box">
                <div class= "form">
                    <h2>Sign in</h2>
                    <div class="Input">
                        <input 
                            name = "email"
                            data-testid="email" 
                            type="text" 
                            required="required"
                            onChange={handleUserInput}
                        />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div class="Input">
                        <input 
                            name = "password"
                            data-testid="password" 
                            type="password" 
                            required="required"
                            onChange={handleUserInput}
                        />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div>
                        <label htmlFor="">{message}</label>
                    </div>
                    <div class='links'>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <div class='login'>
                        <input data-testid="sbutton" type="submit" value="Login" onClick = {handleLogin}/>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Login;

/*
<div className='card'>
<div className="logo">
    <h1>TECHNO</h1>
</div>
<div className='login'>
    <h2>Welcome to TECHNO</h2>
    <div className='form'>
        <label className='label-email'>Email:</label>
        <br />
        <input type="text"></input>
        <br />
        <label>Password:</label>
        <br />
        <input type="password"></input>
    </div>
    <div className='log-button'>
        <button>LOGIN</button>
    </div>
    <div className='checkbox'>
    <input id='box' type="checkbox"/>
    <label > Remember me</label>
    <a id='forgot'href='forgot'>Forgot password?</a>
    </div>

    
    
</div>

</div>

*/