import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link, useHistory} from  'react-router-dom';
import {login} from '../Actions/index'
const Login  = ()=>{
const history = useHistory();
    const [user , setuser] = useState({email: "", password:""});
    const disptach = useDispatch();
    
    function handelsubmit(e){
        e.preventDefault();
    disptach(login(user , history));
        
    }
    return (
        <div className="Login container">
            <div className="logincontent w-50">
              <h1 className="text-center">Sigh in </h1>
              <form onSubmit={handelsubmit}>
                  <div className="form-group p-2">
                      <label className="w-100">Enter the Email</label>
                      <input type="text" value={user.email} onChange={(e)=> setuser({...user, email:e.target.value}) }  className="form-control w-100"  />
                  </div>
                  <div className="form-group p-2">
                      <label htmlFor="" className="w-100">Enter your password</label>
                      <input type="password" value={user.password} onChange={(e)=>setuser({...user, password: e.target.value})} className="form-control w-100" />
                  </div>
                  <div className="form-group p-2">
                      <input type="submit" value="Submit" className="btn btn-primary w-100" />

                  </div>
              </form>
              <hr />
              <div>dont have account  <Link to="/register">Register</Link> </div>
          </div>

        </div>
    )
}
export default Login;
