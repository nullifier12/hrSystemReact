import { Fragment, useRef } from "react";
import Form from "react-bootstrap/Form";
const PrimaryDetailsInput = (props) => {
  console.log(props);
  const fname = useRef("");
  const mname = useRef("");
  const lname = useRef("");
  const sname = useRef("");
  const idNo = useRef("");
  const bDay = useRef("");
  const bPlace = useRef("");
  const civilS = useRef("");
  const gender = useRef("");
  const religion = useRef("");
  const national = useRef("");
  const vaccine = useRef("");
  //   console.log({ data: props.info.fname.current });

  return (
    <Fragment>
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Firstame" ref={fname} />
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Middle Name" ref={mname} />
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Last Name" ref={lname} />
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Suffix" ref={sname} />
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="ID No" ref={idNo} />
      <Form.Label>Birthday</Form.Label>
      <Form.Control type="date" ref={bDay} />
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Birthplace" ref={bPlace} />
      <Form.Label></Form.Label>
      <Form.Select ref={gender}>
        <option>--Gender--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Form.Select>

      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Civil Status" />
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Religion" />
      <Form.Label></Form.Label>
      <Form.Control type="text" placeholder="Nationality" />
      <Form.Label></Form.Label>
      <Form.Select>
        <option>--Vaccinated--</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Form.Select>
    </Fragment>
  );
};
export default PrimaryDetailsInput;
