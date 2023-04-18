import { Fragment } from "react";
import PrimarydetailsContent from "./PrimarydetailsContent";
const Primarydetails = (props) => {
  // console.log(d);
  return (
    <Fragment>
      {props.tab(1) && (
        <div className="row tab-group-one">
          <PrimarydetailsContent d={props.data} />
        </div>
      )}
    </Fragment>
  );
};
export default Primarydetails;
