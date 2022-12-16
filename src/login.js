import './Styles/login.scss';

const Login = () =>{

    return(
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
    )
}
export default Login;