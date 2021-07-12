import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register} from '../Actions/index'
import {useDispatch} from 'react-redux'
const Register = () => {

    toast.configure();
    const history = useHistory();
    const dispatch = useDispatch();
const [user, setuser] = useState({name:"", email:"", password:"", confirm_password :""});
    function handelregister(e){
        e.preventDefault();
        if(user.name === "") toast("Please enter your name")
       else  if(user.email=== "") toast("please Enter email")
       else if( user.password!== user.confirm_password) toast("Please Enter correnct password");
       else {
          dispatch(register(user, history))
       }
    }


  return (
    <div className="Register">
      <div className="container">
        <div className="row">
          <div className="col-md-7 ">
            <h1>Register</h1>
            <form onSubmit={handelregister}>
              <div className="form-group">
                <label htmlFor="">Enter your Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.name}
                  onChange={(e) => setuser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Enter your Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  onChange={(e) => setuser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Enter your password</label>
                <input
                  type="password"
                  className="form-control"
                  value={user.password}
                  onChange={(e) =>
                    setuser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Enter your confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  value={user.confirm_password}
                  onChange={(e) =>
                    setuser({ ...user, confirm_password: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary form-control"
                />
              </div>
            </form>
            <div>
              already have account{" "}
              <Link to="/login">
                login
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
