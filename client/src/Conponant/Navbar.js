
import './style/Navbar.css'
import React  from 'react';
import {Link, useHistory} from 'react-router-dom'
import Hoc from '../Hoc/Auth'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const Navbar  =   (props)=>{
    const user = useSelector(state=> state.Auth.authdata);
    const history =useHistory();
    const dispatch = useDispatch();
    function handellogout() {
        dispatch({ type: "LOGOUT" });
        history.push("/");
        toast("Log out successfully")
    }
    return (
        <div className="Navbar">
            <nav>
            <div className="logo">
                DigiRex
            </div>
            <ul className="navlist">
                <li><Link to="/">Home</Link> </li>
                <li>{user?.result ?"": <Link to="/login">Login</Link>}</li>      
                <li> {user?.result ?"":<Link to="/register">Register</Link>}</li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>{user?.result  ?"Welcome"+user.result.name  : ""}</li>
                <li>{user?.result ? (<button className="btn btn-primary"  onClick={handellogout}>logout</button>): ""}</li>
              </ul>
        </nav>

        </div>
    )
}

const HocNavbar = Hoc(Navbar,  false);
export default HocNavbar;