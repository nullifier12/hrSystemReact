import { Fragment } from "react";

const EmployeeAddress = (props) => {
  let d = props.data;

  return (
    <Fragment>
      {props.tab(2) && (
        <div className="row tab-group-one" key={d.ID}>
          <div className="col-12">
            <div className="row">
              <div className="form-group col-2 grpAddress">
                <label className="col-md-6 control-label">Phase/Lot No.</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="pLnum"
                      defaultValue={d.emp_phnum}
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-2 grpAddress">
                <label className="col-md-6 control-label">Block No.</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="bNum"
                      defaultValue={d.emp_pblocknum}
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-8 grpAddress">
                <label className="col-md-6 control-label">Street Name</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="streetNam"
                      defaultValue={d.emp_prestreetname}
                      className="form-control txtEmpDetailR"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col-4 grpAddress">
                <label className="col-md-6 control-label">
                  Village/Subdivision
                </label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="villSub"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-8 grpAddress">
                <label className="col-md-6 control-label">Barangay</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="baraNgay"
                      defaultValue={d.emp_prebarangay}
                      className="form-control txtEmpDetailR"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col-6 grpAddress">
                <label className="col-md-6 control-label">Municipality</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="munCipal"
                      defaultValue={d.emp_premunicipal}
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-6 grpAddress">
                <label className="col-md-6 control-label">City</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="ciTy"
                      defaultValue={d.emp_preprovince}
                      className="form-control txtEmpDetailR"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col-2 grpAddress">
                <label className="col-md-6 control-label">Zip Code</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="zipCd"
                      defaultValue={d.emp_prezipcode}
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="col-10 grpAddress"></div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default EmployeeAddress;
