import { Fragment } from "react";
const Governmentdetails = (props) => {
  let d = props.data;
  return (
    <Fragment>
      {props.tab(3) && (
        <div className="row tab-group-one" key={d.ID}>
          <div className="col-12">
            <div className="row">
              <div className="form-group col-12 grpGovInfo">
                <label className="col-md-6 control-label">SSS No.</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="sSs"
                      defaultValue={d.emp_sss}
                      className="form-control txtEmpDetailsGovInfo"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-12 grpGovInfo">
                <label className="col-md-6 control-label">TIN No.</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="tIn"
                      defaultValue={d.emp_tin}
                      className="form-control txtEmpDetailsGovInfo"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-12 grpGovInfo">
                <label className="col-md-6 control-label">PHIC No.</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="phIcnum"
                      defaultValue={d.emp_hdmr}
                      className="form-control txtEmpDetailsGovInfo"
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-12 grpGovInfo">
                <label className="col-md-6 control-label">HDMF No.</label>
                <div className="col-md-6 inputGroupContainer">
                  <div className="input-group">
                    <input
                      name="first_name"
                      id="hdMfNum"
                      defaultValue={d.emp_hdmr}
                      className="form-control txtEmpDetailsGovInfo"
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
export default Governmentdetails;
