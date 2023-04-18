import { Fragment } from "react";

const EmployeeList = (props) => {
  // const showId = (e) => {
  //   console.log(e.currentTarget.id);
  // };
  return (
    <Fragment>
      <tr className="rowLOE">
        <td
          className="Name txtName"
          id={props.empnum}
          onClick={props.id}
        >{`${props.lastname} ${props.sufix} ${props.name} ${props.middlename}`}</td>

        <td className="Action">
          <i
            className="fa fa-pencil-square-o upDateEmp"
            aria-hidden="true"
            title="Update"
            id={props.empnum}
            onClick={props.update}
          ></i>
          &nbsp;
          <i
            className="fa fa-trash-o empDelete"
            aria-hidden="true"
            title="Delete"
            id={props.empnum}
            onClick={props.delete}
          ></i>
        </td>
      </tr>
    </Fragment>
  );
};
export default EmployeeList;
