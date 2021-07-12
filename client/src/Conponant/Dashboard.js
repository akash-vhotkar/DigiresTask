import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import Createrecord from "./CreateRecord";
import Records from './Records';
import {searchrecord} from '../Actions/index'
import { useEffect } from "react";
import Hoc from '../Hoc/Auth'
const Dashboard = () => {
    const [display, setdisplay] = useState(false);
    const [searchname, setsearchname]  = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state=> state.Auth.authdata);
    function handeldisplay() {
        setdisplay(prev => !prev);
    }
    useEffect(()=>{
        dispatch(searchrecord(searchname));
    }, [searchname])

    return (
        <div className="Dashboard">
            <div className="container">
                <h1>Hi {user?.result ? user.result.name : ""}</h1>

                <div className="row ">
                    <button className="btn btn-primary" onClick={handeldisplay}>  Create New Record</button>
                </div>
                <div className="row">

                    {display ? <Createrecord></Createrecord> : (
                        <div></div>
                    )}
                </div>


                <div className=" w-100">
                    <div className="w-80">
                        <h1>Search Disease </h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Record here"
                            onChange={(e)=> setsearchname(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="container">

                <Records></Records>

            </div>

        </div>
    );
};
const EnhanceDahsboard = Hoc(Dashboard, true)
export default EnhanceDahsboard;
