import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getrecords } from "../Actions/index";
const Records = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.Records.records);

  useEffect(() => {
    dispatch(getrecords());
  }, []);
  return (
    <div className="Reccords">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Disease Name</th>
            <th scope="col">To</th>
            <th scope="col">From</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, index) => (
            <tr key={index}>
              <th scope="row">{rec.name}</th>
              <td>{rec.to}</td>
              <td>{rec.from}</td>
              <td>{rec.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Records;
