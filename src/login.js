import './Styles/login.scss';

const Login = () =>{

    return(
        <>
            <div className="box" data-testid="box">
                <div className= "form">
                    <h2>Sign in</h2>
                    <div className="Input" data-testid="email">
                        <input type="text" required="required"/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="Input" data-testid="password">
                        <input type="password" required="required"/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className='links'>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <input type="submit" value="Login"/>
                </div>
            </div>
      </>
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