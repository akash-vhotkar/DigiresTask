const Recordsreducers= (state={copyrecords:[], records:[]}, action)=>{
    switch (action.type) {
        case "GetRecords":
            return  {...state, records:action.data, copyrecords : action.data}
        case "Search":
            const newrecords = state.copyrecords.filter(ele=> ele.name.toLowerCase().includes(action.data) );    
            return {...state, records: newrecords};
        default:
            return state;
    }
    
}
export default Recordsreducers