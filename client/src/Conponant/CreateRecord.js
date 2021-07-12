import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {createrecord} from '../Actions/index';
const  Createrecord = ()=>{
    const [record, setrecord] = useState({name:"", to: "", from:"",  notes: ""});
    const user = useSelector(state=> state.Auth);
    const dispatch = useDispatch();
    console.log(user);

    function handelcreaterecord(e){
        e.preventDefault();
        if(user === null){
        toast("please Login")
        }
        else{
            dispatch(createrecord(record));
            setrecord({name:"", to: "", from:"",  notes: ""})
        }
    
        

    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <h1>Create Medical Record</h1>
              <form onSubmit={handelcreaterecord}>
                <div className="form-group">
                  <label htmlFor="">Enter Dieses Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={record.name}
                    onChange={(e) => setrecord({ ...record, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">To</label>
                  <input type="date" className="form-control" value={ record.to} onChange={(e)=>  setrecord({...record , to :  e.target.value})} />
                </div>

                <div className="form-group">
                  <label htmlFor=""> From</label>
                  <input
                    type="date"
                    className="form-control"
                    value={record.from}
                    onChange={(e) =>
                      setrecord({ ...record, from: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Notes</label>
                  <textarea
                    class="form-control rounded-0"
                    id="exampleFormControlTextarea2"
                    rows="3"
                    value={record.notes}
                    onChange={(e)=> setrecord({...record,  notes: e.target.value})}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary form-control"
                  />
                </div>
              </form>

              <hr />
            </div>
          </div>
        </div>

    )
}
export default Createrecord;