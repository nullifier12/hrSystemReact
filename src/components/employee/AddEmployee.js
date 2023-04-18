import { Fragment, useRef, useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CityList from "./Forms/CityList";
import MunicipalityList from "./Forms/MunicipalityList";
import BarangayList from "./Forms/BarangayList";

// import PrimaryDetailsInput from "./Forms/PrimaryDetailsInputs";
const AddEmployee = (props) => {
  // console.log(props);
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
  // const [primarDetails, setPrimary] = useState();
  const eduC = useRef("");
  const address = useRef("");
  const governMent = useRef("");
  const scanneddocs = useRef("");
  const [city, setCity] = useState([]);
  const [municipality, setMuncipal] = useState([]);
  const [barangay, setBarangay] = useState([]);
  const [zipcode, setZipcode] = useState();
  const addEmployee = (e) => {
    e.preventDefault();
    let data = {
      primarDetails: {
        fname: fname.current.value,
        mname: mname.current.value,
        lname: lname.current.value,
        sname: sname.current.value,
        idno: idNo.current.value,
        bday: bDay.current.value,
        bplace: bPlace.current.value,
        civils: civilS.current.value,
        gender: gender.current.value,
        religion: religion.current.value,
        nationality: national.current.value,
        vaccine: vaccine.current.value,
      },
      education: eduC.current.value,
      address: address.current.value,
      government: governMent.current.value,
      scanneddoc: scanneddocs.current.value,
    };
    props.setClose(data);
  };
  const getCitydata = useCallback(async () => {
    await axios.get("/city").then(async (result) => {
      let cityList = await result.data.map((d) => {
        return {
          id: d.prov_code,
          name: d.name,
          provcode: d.prov_code,
        };
      });
      setCity(cityList);
    });
  }, []);
  useEffect(() => {
    getCitydata();
  }, [getCitydata]);

  const cityChange = async (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    console.log(el);
    await axios
      .post("/getMunicipal", { munipalcode: el.getAttribute("id") })
      .then(async (result) => {
        let municipalityList = result.data.map((d) => {
          return {
            id: d.mun_code,
            name: d.name,
          };
        });
        setMuncipal(municipalityList);
      });
  };
  const municipalCode = async (e) => {
    let a = 0;
    let name = e.currentTarget.value;
    let nameZip =
      name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();

    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    await axios
      .post("/barangay", { barangay: el.getAttribute("id") })
      .then(async (result) => {
        await axios.post("/getzip", { data: nameZip }).then(async (result) => {
          setZipcode(result.data);
        });
        let barangay = result.data.map((d) => {
          return {
            id: a++,
            name: d.name,
          };
        });
        setBarangay(barangay);
      });
  };
  return (
    <Fragment>
      <Modal show={props.setshow} onHide={props.onClose}>
        <form onSubmit={addEmployee}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              defaultActiveKey="primary"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="primary" title="Primary">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Firstame" ref={fname} />
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Middle Name"
                  ref={mname}
                />
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Last Name" ref={lname} />
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Suffix" ref={sname} />
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="ID No" ref={idNo} />
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" ref={bDay} />
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Birthplace"
                  ref={bPlace}
                />
                <Form.Label></Form.Label>
                <Form.Select ref={gender} placeholder="Gender">
                  <option>--Gender--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>

                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Civil Status"
                  ref={civilS}
                />
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Religion"
                  ref={religion}
                />
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nationality"
                  ref={national}
                />
                <Form.Label></Form.Label>
                <Form.Select ref={vaccine}>
                  <option>--Vaccinated--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Tab>
              <Tab eventKey="address" title="Address">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Phase No." />
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Block No." />
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Street Name" />
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Village Subdivision" />
                <Form.Label>City</Form.Label>
                <Form.Select onChange={cityChange}>
                  <CityList list={city} />
                </Form.Select>
                <Form.Label>Municipality</Form.Label>
                <Form.Select onChange={municipalCode}>
                  <MunicipalityList list={municipality} />
                </Form.Select>
                <Form.Label>Barangay</Form.Label>
                <Form.Select>
                  <BarangayList list={barangay} />
                </Form.Select>
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zipcode"
                  ref={lname}
                  defaultValue={zipcode}
                />
              </Tab>
              <Tab
                eventKey="educationalbackground"
                title="Educational Background"
              >
                <Form.Label>Educational Background</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Educational Background"
                  ref={eduC}
                />
              </Tab>
              <Tab eventKey="governmentinfo" title="Government Info">
                <Form.Label>Government Details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Government Details"
                  ref={governMent}
                />
              </Tab>
              <Tab eventKey="scanneddocs" title="Certificates">
                <Form.Label>Scanned Documents</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Scanned Docs"
                  ref={scanneddocs}
                />
              </Tab>
            </Tabs>

            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </form>
      </Modal>
    </Fragment>
  );
};
export default AddEmployee;
