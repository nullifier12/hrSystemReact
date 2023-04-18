import { Fragment } from "react";
import BarangayOption from "./BarangayOption";
const BarangayList = (props) => {
  return (
    <Fragment>
      {props.list.map((d) => {
        return <BarangayOption key={d.id} id={d.id} name={d.name} />;
      })}
    </Fragment>
  );
};
export default BarangayList;
