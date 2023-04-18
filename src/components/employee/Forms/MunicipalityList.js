import { Fragment } from "react";
import MunicipalOption from "./MunicipalOption";
const MunicipalityList = (props) => {
  return (
    <Fragment>
      {props.list.map((d) => {
        return <MunicipalOption key={d.id} id={d.id} name={d.name} />;
      })}
    </Fragment>
  );
};
export default MunicipalityList;
