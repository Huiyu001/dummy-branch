import './Login.css';
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from 'react-router-dom'; 

function Login() {
    return (
        <div className="home-container">
            <div className="navbar-container">
                <Navbar />
            </div>


            <div className="main-container-login">
                <div className="login-text-container">
                    <h1>Sign in</h1>
                </div>
                <div className="login-form-container">
                    <div className="login-form">
                        <form>
                            <label>
                                Email
                                <input type="text" name="email" />
                            </label>
                        </form>
                        <form>
                            <label>
                                Password
                                <input type="text" name="password" />
                            </label>
                        </form>
                        <NavLink to="/ChangePassword">
                            Change/forgot password
                        </NavLink>
                    </div>

                    <div className="login-button-container-create">
                        <NavLink to="/Register">
                            <button>Create New Account</button>
                        </NavLink>
                    </div>
                    <div className="login-button-container-login">
                        <NavLink to="/">
                            <button>Sign in</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
