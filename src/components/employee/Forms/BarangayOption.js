import { Fragment } from "react";

const BarangayOption = (props) => {
  return (
    <Fragment>
      <option id={props.id}>{props.name}</option>
    </Fragment>
  );
};
export default BarangayOption;
