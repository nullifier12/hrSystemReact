import { Fragment } from "react";
const EducationalBackground = (props) => {
  return (
    <Fragment>
      {props.tab(4) && (
        <div className="row tab-group-one">
          <div className="col-12">
            <div className="row">
              <div className="col-12 divlblEduc">
                <p className="lblEduc">Primary Education</p>
              </div>
              <div className="form-group col-5 grpEduc">
                <label className="col-md-6 control-label">School</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="pSname"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-5 grpEduc">
                <label className="col-md-6 control-label">Address</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="pEducAddress"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-2 grpEduc">
                <label className="col-md-6 control-label">Year Graduated</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="pYgrad"
                      defaultValue=""
                      className="form-control txtEmpDetailR"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 divlblEduc">
                <p className="lblEduc">Secondary Education</p>
              </div>
              <div className="form-group col-5 grpEduc">
                <label className="col-md-6 control-label">School</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="sSname"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-5 grpEduc">
                <label className="col-md-6 control-label">Address</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="sEducAddress"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-2 grpEduc">
                <label className="col-md-6 control-label">Year Graduated</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="sYear"
                      defaultValue=""
                      className="form-control txtEmpDetailR"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 divlblEduc">
                <p className="lblEduc">Tertiary Education</p>
              </div>
              <div className="form-group col-5 grpEduc">
                <label className="col-md-6 control-label">Schools</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="tEducName"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-3 grpEduc">
                <label className="col-md-6 control-label">Course</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="tCourse"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-3 grpEduc">
                <label className="col-md-6 control-label">Address</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="tEducAddress"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-1 grpEduc">
                <label className="col-md-6 control-label">SY</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="tYgrad"
                      defaultValue=""
                      className="form-control txtEmpDetailR"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 divlblEduc">
                <p className="lblEduc">Vocational/Certificate</p>
              </div>
              <div className="form-group col-5 grpEduc">
                <label className="col-md-6 control-label">School</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="vSchool"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-3 grpEduc">
                <label className="col-md-6 control-label">Address</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="vEducAddress"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-3 grpEduc">
                <label className="col-md-6 control-label">Course</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="vCourse"
                      defaultValue=""
                      className="form-control txtEmpDetails"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-1 grpEduc">
                <label className="col-md-6 control-label">SY</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="vDuration"
                      defaultValue=""
                      className="form-control txtEmpDetailR"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default EducationalBackground;
