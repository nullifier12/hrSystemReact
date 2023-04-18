import { Fragment } from "react";
import CityOption from "./CityOption";
const CityList = (props) => {
  let a = 0;

  return (
    <Fragment>
      {props.list.map((d) => {
        return <CityOption key={a++} provCode={d.provcode} provname={d.name} />;
      })}
    </Fragment>
  );
};
export default CityList;
