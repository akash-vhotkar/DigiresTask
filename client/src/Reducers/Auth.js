const  authreducer = (state= {authdata: null},  action)=>{
    switch (action.type) {
        case "AUTH":
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {...state, authdata: action.data};
        case "LOGOUT":
          localStorage.clear();
          return {...state, authdata: null}
        case "LOGINAGRAIN":
          return  {...state, authdata:  action.data}
        default:
            return state
    }  
  }
  export default authreducer;
  