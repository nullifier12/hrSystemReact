const { Fragment } = require("react");

const MunicipalOption = (props) => {
  //   console.log(props);
  return (
    <Fragment>
      <option id={props.id}>{props.name}</option>
    </Fragment>
  );
};
export default MunicipalOption;
