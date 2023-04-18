import { Fragment } from "react";
import EmployeeList from "./EmployeeList";
const EmployeeContent = (props) => {
  // console.log(props.data);
  return (
    <Fragment>
      {props.data.map((d) => {
        // console.log(d);
        return (
          <EmployeeList
            key={d.id}
            name={d.fistname}
            middlename={d.middlename}
            lastname={d.lastname}
            empnum={d.employeenum}
            birthday={d.birthday}
            sufix={d.sufixname}
            id={props.id}
            delete={props.delete}
            update={props.update}
          />
        );
      })}
    </Fragment>
  );
};
export default EmployeeContent;
