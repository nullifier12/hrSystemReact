import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../CSS/Employee.css";
const Employee = () => {
  return (
    <Fragment>
      <div className="divPage">
        <section className="statistics mt-4">
          <div className="row">
            <div className="col-lg-12 ttlLOE">
              <div className="ms-3">
                <div className="row">
                  <div className="col-6 content dash">
                    <h1 className="fs-3">List of Employees</h1>
                    <p className="mb-0">Check details of all employee</p>
                  </div>
                  <div className="col-6 divEmployeeButton">
                    <span
                      id="btnAddEmployee"
                      className="btn btn-primary addEmployee"
                    >
                      <Link className="lnkAddEmployee">
                        Add Employee &nbsp;{" "}
                        <i className="fa-solid fa-plus btnIcon"></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 employeePage">
              <div className="divSearchTable">
                <form className="search-form">
                  <input
                    type="search"
                    defaultValue=""
                    placeholder="Search"
                    className="search-input"
                    id="searchEmp"
                  />
                  /{" "}
                  <button type="submit" className="search-button">
                    <svg className="submit-button">
                      <use
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      // xlink:href="#search"
                      ></use>
                    </svg>
                  </button>
                  <div className="search-option">
                    <div>
                      <input
                        name="type"
                        type="radio"
                        defaultValue="type-users"
                        id="type-users"
                      />
                      <label htmlFor="ty /pe-users">
                        <svg className="edit-pen-title">
                          <use></use>
                        </svg>
                        <span>Users</span>
                      </label>
                    </div>

                    <div>
                      <input
                        name="type"
                        type="radio"
                        defaultValue="type-posts"
                        id="type-posts"
                      />
                      <label htmlFor="ty /pe-posts">
                        <svg className="edit-pen-title">
                          <use
                          // xmlns:xlink="http://www.w3.org/1999/xlink"
                          // xlink:href="#post"
                          ></use>
                        </svg>
                        <span>Posts</span>
                      </label>
                    </div>
                  </div>
                </form>
                <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  width="0"
                  height="0"
                  display="none"
                >
                  <symbol id="search" viewBox="0 0 32 32">
                    <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
                  </symbol>
                  <symbol id="user" viewBox="0 0 32 32">
                    <path d="M 16 4 C 12.145852 4 9 7.1458513 9 11 C 9 13.393064 10.220383 15.517805 12.0625 16.78125 C 8.485554 18.302923 6 21.859881 6 26 L 8 26 C 8 21.533333 11.533333 18 16 18 C 20.466667 18 24 21.533333 24 26 L 26 26 C 26 21.859881 23.514446 18.302923 19.9375 16.78125 C 21.779617 15.517805 23 13.393064 23 11 C 23 7.1458513 19.854148 4 16 4 z M 16 6 C 18.773268 6 21 8.2267317 21 11 C 21 13.773268 18.773268 16 16 16 C 13.226732 16 11 13.773268 11 11 C 11 8.2267317 13.226732 6 16 6 z" />
                  </symbol>

                  <symbol id="post" viewBox="0 0 32 32">
                    <path d="M 3 5 L 3 6 L 3 23 C 3 25.209804 4.7901961 27 7 27 L 25 27 C 27.209804 27 29 25.209804 29 23 L 29 13 L 29 12 L 28 12 L 23 12 L 23 6 L 23 5 L 22 5 L 4 5 L 3 5 z M 5 7 L 21 7 L 21 12 L 21 13 L 21 23 C 21 23.73015 21.221057 24.41091 21.5625 25 L 7 25 C 5.8098039 25 5 24.190196 5 23 L 5 7 z M 7 9 L 7 10 L 7 13 L 7 14 L 8 14 L 18 14 L 19 14 L 19 13 L 19 10 L 19 9 L 18 9 L 8 9 L 7 9 z M 9 11 L 17 11 L 17 12 L 9 12 L 9 11 z M 23 14 L 27 14 L 27 23 C 27 24.190196 26.190196 25 25 25 C 23.809804 25 23 24.190196 23 23 L 23 14 z M 7 15 L 7 17 L 12 17 L 12 15 L 7 15 z M 14 15 L 14 17 L 19 17 L 19 15 L 14 15 z M 7 18 L 7 20 L 12 20 L 12 18 L 7 18 z M 14 18 L 14 20 L 19 20 L 19 18 L 14 18 z M 7 21 L 7 23 L 12 23 L 12 21 L 7 21 z M 14 21 L 14 23 L 19 23 L 19 21 L 14 21 z" />
                  </symbol>
                </svg>
                <br />
                <br />
                <table className="table tblListOfEmployee">
                  <thead>
                    <tr>
                      <th scope="col" className="colName">
                        Name of Employees
                      </th>

                      <th scope="col" className="colAction">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody id="employeeData"></tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-8 employeeDetail">
              <div className="divEmployeeDetail">
                <ul className="form-tabs">
                  <li
                    className="form-tab form-tab-first active-tab tabPrimaryDetails"
                    data-tabgroup="One"
                  >
                    Primary
                  </li>
                  <li
                    className="form-tab form-tab-second tabAddress"
                    data-tabgroup="Two"
                  >
                    Address
                  </li>
                  <li className="form-tab form-tab-third" data-tabgroup="Three">
                    Government Information
                  </li>
                  <li className="form-tab form-tab-fourth" data-tabgroup="Four">
                    Educational Background
                  </li>
                  <li className="form-tab form-tab-fifth" data-tabgroup="Five">
                    Scanned Documents
                  </li>
                </ul>
                <br />
                <form className="tabField" id="employeeDet">
                  <div className="row tab-group-one">
                    <div className="col-12">
                      <div className="row">
                        <div className="form-group col-3 grpPrimary">
                          <label className="col-md-6 control-label">
                            First Name
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="fName"
                                defaultValue=""
                                className="form-control txtEmpDetails"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-3 grpPrimary">
                          <label className="col-md-6 control-label">
                            Middle Name
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="mName"
                                defaultValue=""
                                className="form-control txtEmpDetails"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-3 grpPrimary">
                          <label className="col-md-6 control-label">
                            Last Name
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="lName"
                                defaultValue=""
                                className="form-control txtEmpDetails"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-1 grpPrimary">
                          <label className="col-md-6 control-label">
                            Suffix
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="sName"
                                defaultValue=""
                                className="form-control txtEmpDetails"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-2 grpPrimary">
                          <label className="col-md-6 control-label">
                            ID No.
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="empNum"
                                defaultValue=""
                                className="form-control txtEmpDetailR"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group col-4 grpPrimary">
                          <label className="col-md-6 control-label">
                            Birthday
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="bDay"
                                defaultValue=""
                                className="form-control txtEmpDetails"
                                type="date"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-8 grpPrimary">
                          <label className="col-md-6 control-label">
                            Birthplace
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="bPlace"
                                defaultValue=""
                                className="form-control txtEmpDetailR"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group col-4 grpPrimary">
                          <label className="col-md-6 control-label">
                            Gender
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <select
                                className="btn border-secondary"
                                name=""
                                id="empGender"
                                disabled
                              >
                                <option className="text-start" defaultValue="">
                                  -- select one --
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Male"
                                >
                                  Male
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Female"
                                >
                                  Female
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-4 grpPrimary">
                          <label className="col-md-6 control-label">
                            Status
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <select
                                className="btn border-secondary"
                                name=""
                                id="civilStatus"
                                disabled
                              >
                                <option className="text-start" defaultValue="">
                                  -- select one --
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Single"
                                >
                                  Single
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Married"
                                >
                                  Married
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Divorced"
                                >
                                  Divorced
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Separated"
                                >
                                  Separated{" "}
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Widowed"
                                >
                                  Widowed
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-4 grpPrimary">
                          <label className="col-md-6 control-label">
                            Religion
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="reLigion"
                                defaultValue=""
                                className="form-control txtEmpDetailR"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group col-3 grpPrimary">
                          <label className="col-md-6 control-label">
                            Nationality
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <select
                                className="btn border-secondary"
                                name="nationality"
                                id="empNationality"
                                disabled
                              >
                                <option className="text-start" defaultValue="">
                                  -- select one --
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="afghan"
                                >
                                  Afghan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="albanian"
                                >
                                  Albanian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="algerian"
                                >
                                  Algerian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="american"
                                >
                                  American
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="andorran"
                                >
                                  Andorran
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="angolan"
                                >
                                  Angolan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="antiguans"
                                >
                                  Antiguans
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="argentinean"
                                >
                                  Argentinean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="armenian"
                                >
                                  Armenian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="australian"
                                >
                                  Australian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="austrian"
                                >
                                  Austrian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="azerbaijani"
                                >
                                  Azerbaijani
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bahamian"
                                >
                                  Bahamian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bahraini"
                                >
                                  Bahraini
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bangladeshi"
                                >
                                  Bangladeshi
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="barbadian"
                                >
                                  Barbadian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="barbudans"
                                >
                                  Barbudans
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="batswana"
                                >
                                  Batswana
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="belarusian"
                                >
                                  Belarusian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="belgian"
                                >
                                  Belgian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="belizean"
                                >
                                  Belizean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="beninese"
                                >
                                  Beninese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bhutanese"
                                >
                                  Bhutanese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bolivian"
                                >
                                  Bolivian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bosnian"
                                >
                                  Bosnian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="brazilian"
                                >
                                  Brazilian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="british"
                                >
                                  British
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bruneian"
                                >
                                  Bruneian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="bulgarian"
                                >
                                  Bulgarian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="burkinabe"
                                >
                                  Burkinabe
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="burmese"
                                >
                                  Burmese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="burundian"
                                >
                                  Burundian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="cambodian"
                                >
                                  Cambodian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="cameroonian"
                                >
                                  Cameroonian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="canadian"
                                >
                                  Canadian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="cape verdean"
                                >
                                  Cape Verdean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="central african"
                                >
                                  Central African
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="chadian"
                                >
                                  Chadian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="chilean"
                                >
                                  Chilean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="chinese"
                                >
                                  Chinese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="colombian"
                                >
                                  Colombian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="comoran"
                                >
                                  Comoran
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="congolese"
                                >
                                  Congolese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="costa rican"
                                >
                                  Costa Rican
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="croatian"
                                >
                                  Croatian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="cuban"
                                >
                                  Cuban
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="cypriot"
                                >
                                  Cypriot
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="czech"
                                >
                                  Czech
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="danish"
                                >
                                  Danish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="djibouti"
                                >
                                  Djibouti
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="dominican"
                                >
                                  Dominican
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="dutch"
                                >
                                  Dutch
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="east timorese"
                                >
                                  East Timorese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="ecuadorean"
                                >
                                  Ecuadorean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="egyptian"
                                >
                                  Egyptian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="emirian"
                                >
                                  Emirian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="equatorial guinean"
                                >
                                  Equatorial Guinean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="eritrean"
                                >
                                  Eritrean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="estonian"
                                >
                                  Estonian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="ethiopian"
                                >
                                  Ethiopian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="fijian"
                                >
                                  Fijian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="filipino"
                                >
                                  Filipino
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="finnish"
                                >
                                  Finnish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="french"
                                >
                                  French
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="gabonese"
                                >
                                  Gabonese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="gambian"
                                >
                                  Gambian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="georgian"
                                >
                                  Georgian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="german"
                                >
                                  German
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="ghanaian"
                                >
                                  Ghanaian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="greek"
                                >
                                  Greek
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="grenadian"
                                >
                                  Grenadian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="guatemalan"
                                >
                                  Guatemalan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="guinea-bissauan"
                                >
                                  Guinea-Bissauan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="guinean"
                                >
                                  Guinean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="guyanese"
                                >
                                  Guyanese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="haitian"
                                >
                                  Haitian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="herzegovinian"
                                >
                                  Herzegovinian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="honduran"
                                >
                                  Honduran
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="hungarian"
                                >
                                  Hungarian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="icelander"
                                >
                                  Icelander
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="indian"
                                >
                                  Indian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="indonesian"
                                >
                                  Indonesian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="iranian"
                                >
                                  Iranian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="iraqi"
                                >
                                  Iraqi
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="irish"
                                >
                                  Irish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="israeli"
                                >
                                  Israeli
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="italian"
                                >
                                  Italian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="ivorian"
                                >
                                  Ivorian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="jamaican"
                                >
                                  Jamaican
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="japanese"
                                >
                                  Japanese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="jordanian"
                                >
                                  Jordanian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="kazakhstani"
                                >
                                  Kazakhstani
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="kenyan"
                                >
                                  Kenyan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="kittian and nevisian"
                                >
                                  Kittian and Nevisian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="kuwaiti"
                                >
                                  Kuwaiti
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="kyrgyz"
                                >
                                  Kyrgyz
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="laotian"
                                >
                                  Laotian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="latvian"
                                >
                                  Latvian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="lebanese"
                                >
                                  Lebanese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="liberian"
                                >
                                  Liberian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="libyan"
                                >
                                  Libyan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="liechtensteiner"
                                >
                                  Liechtensteiner
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="lithuanian"
                                >
                                  Lithuanian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="luxembourger"
                                >
                                  Luxembourger
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="macedonian"
                                >
                                  Macedonian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="malagasy"
                                >
                                  Malagasy
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="malawian"
                                >
                                  Malawian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="malaysian"
                                >
                                  Malaysian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="maldivan"
                                >
                                  Maldivan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="malian"
                                >
                                  Malian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="maltese"
                                >
                                  Maltese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="marshallese"
                                >
                                  Marshallese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="mauritanian"
                                >
                                  Mauritanian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="mauritian"
                                >
                                  Mauritian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="mexican"
                                >
                                  Mexican
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="micronesian"
                                >
                                  Micronesian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="moldovan"
                                >
                                  Moldovan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="monacan"
                                >
                                  Monacan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="mongolian"
                                >
                                  Mongolian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="moroccan"
                                >
                                  Moroccan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="mosotho"
                                >
                                  Mosotho
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="motswana"
                                >
                                  Motswana
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="mozambican"
                                >
                                  Mozambican
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="namibian"
                                >
                                  Namibian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="nauruan"
                                >
                                  Nauruan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="nepalese"
                                >
                                  Nepalese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="new zealander"
                                >
                                  New Zealander
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="ni-vanuatu"
                                >
                                  Ni-Vanuatu
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="nicaraguan"
                                >
                                  Nicaraguan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="nigerien"
                                >
                                  Nigerien
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="north korean"
                                >
                                  North Korean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="northern irish"
                                >
                                  Northern Irish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="norwegian"
                                >
                                  Norwegian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="omani"
                                >
                                  Omani
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="pakistani"
                                >
                                  Pakistani
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="palauan"
                                >
                                  Palauan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="panamanian"
                                >
                                  Panamanian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="papua new guinean"
                                >
                                  Papua New Guinean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="paraguayan"
                                >
                                  Paraguayan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="peruvian"
                                >
                                  Peruvian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="polish"
                                >
                                  Polish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="portuguese"
                                >
                                  Portuguese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="qatari"
                                >
                                  Qatari
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="romanian"
                                >
                                  Romanian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="russian"
                                >
                                  Russian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="rwandan"
                                >
                                  Rwandan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="saint lucian"
                                >
                                  Saint Lucian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="salvadoran"
                                >
                                  Salvadoran
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="samoan"
                                >
                                  Samoan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="san marinese"
                                >
                                  San Marinese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="sao tomean"
                                >
                                  Sao Tomean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="saudi"
                                >
                                  Saudi
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="scottish"
                                >
                                  Scottish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="senegalese"
                                >
                                  Senegalese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="serbian"
                                >
                                  Serbian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="seychellois"
                                >
                                  Seychellois
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="sierra leonean"
                                >
                                  Sierra Leonean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="singaporean"
                                >
                                  Singaporean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="slovakian"
                                >
                                  Slovakian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="slovenian"
                                >
                                  Slovenian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="solomon islander"
                                >
                                  Solomon Islander
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="somali"
                                >
                                  Somali
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="south african"
                                >
                                  South African
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="south korean"
                                >
                                  South Korean
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="spanish"
                                >
                                  Spanish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="sri lankan"
                                >
                                  Sri Lankan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="sudanese"
                                >
                                  Sudanese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="surinamer"
                                >
                                  Surinamer
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="swazi"
                                >
                                  Swazi
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="swedish"
                                >
                                  Swedish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="swiss"
                                >
                                  Swiss
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="syrian"
                                >
                                  Syrian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="taiwanese"
                                >
                                  Taiwanese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="tajik"
                                >
                                  Tajik
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="tanzanian"
                                >
                                  Tanzanian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="thai"
                                >
                                  Thai
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="togolese"
                                >
                                  Togolese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="tongan"
                                >
                                  Tongan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="trinidadian or tobagonian"
                                >
                                  Trinidadian or Tobagonian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="tunisian"
                                >
                                  Tunisian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="turkish"
                                >
                                  Turkish
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="tuvaluan"
                                >
                                  Tuvaluan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="ugandan"
                                >
                                  Ugandan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="ukrainian"
                                >
                                  Ukrainian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="uruguayan"
                                >
                                  Uruguayan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="uzbekistani"
                                >
                                  Uzbekistani
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="venezuelan"
                                >
                                  Venezuelan
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="vietnamese"
                                >
                                  Vietnamese
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="welsh"
                                >
                                  Welsh
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="yemenite"
                                >
                                  Yemenite
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="zambian"
                                >
                                  Zambian
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="zimbabwean"
                                >
                                  Zimbabwean
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-2 grpPrimary">
                          <label className="col-md-6 control-label">
                            Vaccinated
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <select
                                className="btn border-secondary"
                                name=""
                                id="vacCine"
                                disabled
                              >
                                <option className="text-start" defaultValue="">
                                  -- select one --
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="Yes"
                                >
                                  Yes
                                </option>
                                <option
                                  className="text-start"
                                  defaultValue="No"
                                >
                                  No
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 colPrimary rowButtonPrimary tab-group-one">
                    {/* <span
                      className="formbutton tab-group-one secondTab1 next btnNexttoAddress"
                      data-tabgroup="Two"
                    >
                      Next
                    </span> */}
                  </div>

                  <div className="row tab-group-two">
                    <div className="col-12">
                      <div className="row">
                        <div className="form-group col-2 grpAddress">
                          <label className="col-md-6 control-label">
                            Phase/Lot No.
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="pLnum"
                                defaultValue=""
                                className="form-control txtEmpDetails"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-2 grpAddress">
                          <label className="col-md-6 control-label">
                            Block No.
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="bNum"
                                defaultValue=""
                                className="form-control txtEmpDetails"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-8 grpAddress">
                          <label className="col-md-6 control-label">
                            Street Name
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="streetNam"
                                defaultValue=""
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
                          <label className="col-md-6 control-label">
                            Barangay
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="baraNgay"
                                defaultValue=""
                                className="form-control txtEmpDetailR"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group col-6 grpAddress">
                          <label className="col-md-6 control-label">
                            Municipality
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="munCipal"
                                defaultValue=""
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
                                defaultValue=""
                                className="form-control txtEmpDetailR"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group col-2 grpAddress">
                          <label className="col-md-6 control-label">
                            Zip Code
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="zipCd"
                                defaultValue=""
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
                  <div className="col-12 rowButton rowButtonAddress tab-group-two">
                    <div className="row colAddress">
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-two firstTab back"
                          style={{ backgroundColor: "rgb(71, 71, 71)" }}
                          data-tabgroup="One"
                        >
                          Back
                        </span>
                      </div>
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-two thirdTab1 next"
                          style={{ backgroundColor: "lightseagreen" }}
                          data-tabgroup="Three"
                        >
                          Next
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row tab-group-three">
                    <div className="col-12">
                      <div className="row">
                        <div className="form-group col-12 grpGovInfo">
                          <label className="col-md-6 control-label">
                            SSS No.
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="sSs"
                                defaultValue=""
                                className="form-control txtEmpDetailsGovInfo"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-12 grpGovInfo">
                          <label className="col-md-6 control-label">
                            TIN No.
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="tIn"
                                defaultValue=""
                                className="form-control txtEmpDetailsGovInfo"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-12 grpGovInfo">
                          <label className="col-md-6 control-label">
                            PHIC No.
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="phIcnum"
                                defaultValue=""
                                className="form-control txtEmpDetailsGovInfo"
                                type="text"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-12 grpGovInfo">
                          <label className="col-md-6 control-label">
                            HDMF No.
                          </label>
                          <div className="col-md-6 inputGroupContainer">
                            <div className="input-group">
                              <input
                                name="first_name"
                                id="hdMfNum"
                                defaultValue=""
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
                  <div className="col-12 rowButtonGovInfo tab-group-three">
                    <div className="row colGov">
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-three secondTab2 back"
                          style={{ backgroundColor: "rgb(71, 71, 71)" }}
                          data-tabgroup="Two"
                        >
                          Back
                        </span>
                      </div>
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-three fourthTab1 next"
                          style={{ backgroundColor: "lightseagreen" }}
                          data-tabgroup="Four"
                        >
                          Next
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row tab-group-four">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 divlblEduc">
                          <p className="lblEduc">Primary Education</p>
                        </div>
                        <div className="form-group col-5 grpEduc">
                          <label className="col-md-6 control-label">
                            School
                          </label>
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
                          <label className="col-md-6 control-label">
                            Address
                          </label>
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
                          <label className="col-md-6 control-label">
                            Year Graduated
                          </label>
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
                          <label className="col-md-6 control-label">
                            School
                          </label>
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
                          <label className="col-md-6 control-label">
                            Address
                          </label>
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
                          <label className="col-md-6 control-label">
                            Year Graduated
                          </label>
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
                          <label className="col-md-6 control-label">
                            Schools
                          </label>
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
                          <label className="col-md-6 control-label">
                            Course
                          </label>
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
                          <label className="col-md-6 control-label">
                            Address
                          </label>
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
                          <label className="col-md-6 control-label">
                            School
                          </label>
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
                          <label className="col-md-6 control-label">
                            Address
                          </label>
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
                          <label className="col-md-6 control-label">
                            Course
                          </label>
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
                  <div className="col-12 rowButton rowButtonEduc tab-group-four">
                    <div className="row colEduc">
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-four thirdTab2 back"
                          style={{ backgroundColor: "rgb(71, 71, 71)" }}
                          data-tabgroup="Three"
                        >
                          Back
                        </span>
                      </div>
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-four fifthTab next"
                          style={{ backgroundColor: "lightseagreen" }}
                          data-tabgroup="Five"
                        >
                          Next
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row tab-group-five">
                    <div className="col-12">
                      <div className="row">
                        <div className="form-group col-12 grpDocs">
                          <div className="row doc1">
                            <div className="col-3 example-2 card1">
                              <div className="wrapper wrp1">
                                <div className="footer">
                                  <span className="author">ID Picture</span>{" "}
                                  <br />
                                  <span className="title">
                                    (Uploaded last May 2022)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3 example-2 card1">
                              <div className="wrapper wrp2">
                                <div className="footer">
                                  <span className="author">Diploma</span> <br />
                                  <span className="title">
                                    (Uploaded last May 2022)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3 example-2 card1">
                              <div className="wrapper wrp3">
                                <div className="footer">
                                  <span className="author">NBI Clearance</span>{" "}
                                  <br />
                                  <span className="title">
                                    (Uploaded last May 2022)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-3 example-2 card1">
                              <div className="wrapper wrp4">
                                <div className="footer">
                                  <span className="author">Med. Cert.</span>{" "}
                                  <br />
                                  <span className="title">
                                    (Uploaded last May 2022)
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-3 example-2 card2">
                              <div className="addDocs">
                                <i className="fa-solid fa-circle-plus btnAddDocs"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 rowButton rowButtonDocs tab-group-five">
                    <div className="row colDocs">
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-five fourthTab2 back btnBackNext"
                          style={{ backgroundColor: "rgb(71, 71, 71)" }}
                          data-tabgroup="Four"
                        >
                          Back
                        </span>
                      </div>
                      <div className="col-6">
                        <span
                          className="formbutton tab-group-five fifthTab next btnSubmitEdit"
                          style={{ backgroundColor: "lightseagreen" }}
                          data-tabgroup="Five"
                          hidden
                        >
                          Submit
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Employee;
