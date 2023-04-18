const { Fragment } = require("react");

const CityOption = (props) => {
  return (
    <Fragment>
      <option id={props.provCode}>{props.provname}</option>
    </Fragment>
  );
};
export default CityOption;
