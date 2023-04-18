import { Fragment } from "react";
// import Moment from "react-moment";

const PrimarydetailsContent = (props) => {
  const d = props.d;

  return (
    <Fragment>
      <div className="col-12" key={d.ID}>
        <div className="row">
          <div className="form-group col-4 grpPrimary">
            <label className="control-label">First Name</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="fName"
                  defaultValue={d.emp_fname}
                  className="form-control txtEmpDetails"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="form-group col-3 grpPrimary">
            <label className="control-label">Middle Name</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="mName"
                  defaultValue={d.emp_mname}
                  className="form-control txtEmpDetails"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="form-group col-3 grpPrimary">
            <label className="col-md-6 control-label">Last Name</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="lName"
                  defaultValue={d.emp_lname}
                  className="form-control txtEmpDetails"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="form-group col-1 grpPrimary">
            <label className="col-md-6 control-label">Suffix</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="sName"
                  defaultValue={d.emp_sufix}
                  className="form-control txtEmpDetails"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="form-group col-2 grpPrimary">
            <label className="col-md-6 control-label">ID No.</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="empNum"
                  defaultValue={d.emp_empnum}
                  className="form-control txtEmpDetailR"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="form-group col-4 grpPrimary">
            <label className="col-md-6 control-label">Birthday</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="bDay"
                  defaultValue={d.emp_bday}
                  className="form-control txtEmpDetails"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="form-group col-8 grpPrimary">
            <label className="col-md-6 control-label">Birthplace</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="bPlace"
                  defaultValue={d.emp_birthplace}
                  className="form-control txtEmpDetailR"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="form-group col-4 grpPrimary">
            <label className="col-md-6 control-label">Gender</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <select
                  className="btn border-secondary"
                  name=""
                  id="empGender"
                  disabled
                >
                  <option className="text-start" defaultValue={d.emp_gender}>
                    -- select one --
                  </option>
                  <option className="text-start" defaultValue="Male">
                    Male
                  </option>
                  <option className="text-start" defaultValue="Female">
                    Female
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group col-4 grpPrimary">
            <label className="col-md-6 control-label">Status</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <select
                  className="btn border-secondary"
                  name=""
                  id="civilStatus"
                  defaultValue={d.emp_cstatus}
                  disabled
                >
                  <option className="text-start" defaultValue="">
                    -- select one --
                  </option>
                  <option className="text-start" defaultValue="Single">
                    Single
                  </option>
                  <option className="text-start" defaultValue="Married">
                    Married
                  </option>
                  <option className="text-start" defaultValue="Divorced">
                    Divorced
                  </option>
                  <option className="text-start" defaultValue="Separated">
                    Separated{" "}
                  </option>
                  <option className="text-start" defaultValue="Widowed">
                    Widowed
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group col-4 grpPrimary">
            <label className="col-md-6 control-label">Religion</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <input
                  name="first_name"
                  id="reLigion"
                  defaultValue={d.emp_religion}
                  className="form-control txtEmpDetailR"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="form-group col-3 grpPrimary">
            <label className="col-md-6 control-label">Nationality</label>
            <div className="col-md-6 inputGroupContainer">
              <div className="input-group">
                <select
                  className="btn border-secondary"
                  name="nationality"
                  id="empNationality"
                  disabled
                >
                  <option
                    className="text-start"
                    defaultValue={d.emp_nationality}
                  >
                    -- select one --
                  </option>
                  <option className="text-start" defaultValue="afghan">
                    Afghan
                  </option>
                  <option className="text-start" defaultValue="albanian">
                    Albanian
                  </option>
                  <option className="text-start" defaultValue="algerian">
                    Algerian
                  </option>
                  <option className="text-start" defaultValue="american">
                    American
                  </option>
                  <option className="text-start" defaultValue="andorran">
                    Andorran
                  </option>
                  <option className="text-start" defaultValue="angolan">
                    Angolan
                  </option>
                  <option className="text-start" defaultValue="antiguans">
                    Antiguans
                  </option>
                  <option className="text-start" defaultValue="argentinean">
                    Argentinean
                  </option>
                  <option className="text-start" defaultValue="armenian">
                    Armenian
                  </option>
                  <option className="text-start" defaultValue="australian">
                    Australian
                  </option>
                  <option className="text-start" defaultValue="austrian">
                    Austrian
                  </option>
                  <option className="text-start" defaultValue="azerbaijani">
                    Azerbaijani
                  </option>
                  <option className="text-start" defaultValue="bahamian">
                    Bahamian
                  </option>
                  <option className="text-start" defaultValue="bahraini">
                    Bahraini
                  </option>
                  <option className="text-start" defaultValue="bangladeshi">
                    Bangladeshi
                  </option>
                  <option className="text-start" defaultValue="barbadian">
                    Barbadian
                  </option>
                  <option className="text-start" defaultValue="barbudans">
                    Barbudans
                  </option>
                  <option className="text-start" defaultValue="batswana">
                    Batswana
                  </option>
                  <option className="text-start" defaultValue="belarusian">
                    Belarusian
                  </option>
                  <option className="text-start" defaultValue="belgian">
                    Belgian
                  </option>
                  <option className="text-start" defaultValue="belizean">
                    Belizean
                  </option>
                  <option className="text-start" defaultValue="beninese">
                    Beninese
                  </option>
                  <option className="text-start" defaultValue="bhutanese">
                    Bhutanese
                  </option>
                  <option className="text-start" defaultValue="bolivian">
                    Bolivian
                  </option>
                  <option className="text-start" defaultValue="bosnian">
                    Bosnian
                  </option>
                  <option className="text-start" defaultValue="brazilian">
                    Brazilian
                  </option>
                  <option className="text-start" defaultValue="british">
                    British
                  </option>
                  <option className="text-start" defaultValue="bruneian">
                    Bruneian
                  </option>
                  <option className="text-start" defaultValue="bulgarian">
                    Bulgarian
                  </option>
                  <option className="text-start" defaultValue="burkinabe">
                    Burkinabe
                  </option>
                  <option className="text-start" defaultValue="burmese">
                    Burmese
                  </option>
                  <option className="text-start" defaultValue="burundian">
                    Burundian
                  </option>
                  <option className="text-start" defaultValue="cambodian">
                    Cambodian
                  </option>
                  <option className="text-start" defaultValue="cameroonian">
                    Cameroonian
                  </option>
                  <option className="text-start" defaultValue="canadian">
                    Canadian
                  </option>
                  <option className="text-start" defaultValue="cape verdean">
                    Cape Verdean
                  </option>
                  <option className="text-start" defaultValue="central african">
                    Central African
                  </option>
                  <option className="text-start" defaultValue="chadian">
                    Chadian
                  </option>
                  <option className="text-start" defaultValue="chilean">
                    Chilean
                  </option>
                  <option className="text-start" defaultValue="chinese">
                    Chinese
                  </option>
                  <option className="text-start" defaultValue="colombian">
                    Colombian
                  </option>
                  <option className="text-start" defaultValue="comoran">
                    Comoran
                  </option>
                  <option className="text-start" defaultValue="congolese">
                    Congolese
                  </option>
                  <option className="text-start" defaultValue="costa rican">
                    Costa Rican
                  </option>
                  <option className="text-start" defaultValue="croatian">
                    Croatian
                  </option>
                  <option className="text-start" defaultValue="cuban">
                    Cuban
                  </option>
                  <option className="text-start" defaultValue="cypriot">
                    Cypriot
                  </option>
                  <option className="text-start" defaultValue="czech">
                    Czech
                  </option>
                  <option className="text-start" defaultValue="danish">
                    Danish
                  </option>
                  <option className="text-start" defaultValue="djibouti">
                    Djibouti
                  </option>
                  <option className="text-start" defaultValue="dominican">
                    Dominican
                  </option>
                  <option className="text-start" defaultValue="dutch">
                    Dutch
                  </option>
                  <option className="text-start" defaultValue="east timorese">
                    East Timorese
                  </option>
                  <option className="text-start" defaultValue="ecuadorean">
                    Ecuadorean
                  </option>
                  <option className="text-start" defaultValue="egyptian">
                    Egyptian
                  </option>
                  <option className="text-start" defaultValue="emirian">
                    Emirian
                  </option>
                  <option
                    className="text-start"
                    defaultValue="equatorial guinean"
                  >
                    Equatorial Guinean
                  </option>
                  <option className="text-start" defaultValue="eritrean">
                    Eritrean
                  </option>
                  <option className="text-start" defaultValue="estonian">
                    Estonian
                  </option>
                  <option className="text-start" defaultValue="ethiopian">
                    Ethiopian
                  </option>
                  <option className="text-start" defaultValue="fijian">
                    Fijian
                  </option>
                  <option className="text-start" defaultValue="filipino">
                    Filipino
                  </option>
                  <option className="text-start" defaultValue="finnish">
                    Finnish
                  </option>
                  <option className="text-start" defaultValue="french">
                    French
                  </option>
                  <option className="text-start" defaultValue="gabonese">
                    Gabonese
                  </option>
                  <option className="text-start" defaultValue="gambian">
                    Gambian
                  </option>
                  <option className="text-start" defaultValue="georgian">
                    Georgian
                  </option>
                  <option className="text-start" defaultValue="german">
                    German
                  </option>
                  <option className="text-start" defaultValue="ghanaian">
                    Ghanaian
                  </option>
                  <option className="text-start" defaultValue="greek">
                    Greek
                  </option>
                  <option className="text-start" defaultValue="grenadian">
                    Grenadian
                  </option>
                  <option className="text-start" defaultValue="guatemalan">
                    Guatemalan
                  </option>
                  <option className="text-start" defaultValue="guinea-bissauan">
                    Guinea-Bissauan
                  </option>
                  <option className="text-start" defaultValue="guinean">
                    Guinean
                  </option>
                  <option className="text-start" defaultValue="guyanese">
                    Guyanese
                  </option>
                  <option className="text-start" defaultValue="haitian">
                    Haitian
                  </option>
                  <option className="text-start" defaultValue="herzegovinian">
                    Herzegovinian
                  </option>
                  <option className="text-start" defaultValue="honduran">
                    Honduran
                  </option>
                  <option className="text-start" defaultValue="hungarian">
                    Hungarian
                  </option>
                  <option className="text-start" defaultValue="icelander">
                    Icelander
                  </option>
                  <option className="text-start" defaultValue="indian">
                    Indian
                  </option>
                  <option className="text-start" defaultValue="indonesian">
                    Indonesian
                  </option>
                  <option className="text-start" defaultValue="iranian">
                    Iranian
                  </option>
                  <option className="text-start" defaultValue="iraqi">
                    Iraqi
                  </option>
                  <option className="text-start" defaultValue="irish">
                    Irish
                  </option>
                  <option className="text-start" defaultValue="israeli">
                    Israeli
                  </option>
                  <option className="text-start" defaultValue="italian">
                    Italian
                  </option>
                  <option className="text-start" defaultValue="ivorian">
                    Ivorian
                  </option>
                  <option className="text-start" defaultValue="jamaican">
                    Jamaican
                  </option>
                  <option className="text-start" defaultValue="japanese">
                    Japanese
                  </option>
                  <option className="text-start" defaultValue="jordanian">
                    Jordanian
                  </option>
                  <option className="text-start" defaultValue="kazakhstani">
                    Kazakhstani
                  </option>
                  <option className="text-start" defaultValue="kenyan">
                    Kenyan
                  </option>
                  <option
                    className="text-start"
                    defaultValue="kittian and nevisian"
                  >
                    Kittian and Nevisian
                  </option>
                  <option className="text-start" defaultValue="kuwaiti">
                    Kuwaiti
                  </option>
                  <option className="text-start" defaultValue="kyrgyz">
                    Kyrgyz
                  </option>
                  <option className="text-start" defaultValue="laotian">
                    Laotian
                  </option>
                  <option className="text-start" defaultValue="latvian">
                    Latvian
                  </option>
                  <option className="text-start" defaultValue="lebanese">
                    Lebanese
                  </option>
                  <option className="text-start" defaultValue="liberian">
                    Liberian
                  </option>
                  <option className="text-start" defaultValue="libyan">
                    Libyan
                  </option>
                  <option className="text-start" defaultValue="liechtensteiner">
                    Liechtensteiner
                  </option>
                  <option className="text-start" defaultValue="lithuanian">
                    Lithuanian
                  </option>
                  <option className="text-start" defaultValue="luxembourger">
                    Luxembourger
                  </option>
                  <option className="text-start" defaultValue="macedonian">
                    Macedonian
                  </option>
                  <option className="text-start" defaultValue="malagasy">
                    Malagasy
                  </option>
                  <option className="text-start" defaultValue="malawian">
                    Malawian
                  </option>
                  <option className="text-start" defaultValue="malaysian">
                    Malaysian
                  </option>
                  <option className="text-start" defaultValue="maldivan">
                    Maldivan
                  </option>
                  <option className="text-start" defaultValue="malian">
                    Malian
                  </option>
                  <option className="text-start" defaultValue="maltese">
                    Maltese
                  </option>
                  <option className="text-start" defaultValue="marshallese">
                    Marshallese
                  </option>
                  <option className="text-start" defaultValue="mauritanian">
                    Mauritanian
                  </option>
                  <option className="text-start" defaultValue="mauritian">
                    Mauritian
                  </option>
                  <option className="text-start" defaultValue="mexican">
                    Mexican
                  </option>
                  <option className="text-start" defaultValue="micronesian">
                    Micronesian
                  </option>
                  <option className="text-start" defaultValue="moldovan">
                    Moldovan
                  </option>
                  <option className="text-start" defaultValue="monacan">
                    Monacan
                  </option>
                  <option className="text-start" defaultValue="mongolian">
                    Mongolian
                  </option>
                  <option className="text-start" defaultValue="moroccan">
                    Moroccan
                  </option>
                  <option className="text-start" defaultValue="mosotho">
                    Mosotho
                  </option>
                  <option className="text-start" defaultValue="motswana">
                    Motswana
                  </option>
                  <option className="text-start" defaultValue="mozambican">
                    Mozambican
                  </option>
                  <option className="text-start" defaultValue="namibian">
                    Namibian
                  </option>
                  <option className="text-start" defaultValue="nauruan">
                    Nauruan
                  </option>
                  <option className="text-start" defaultValue="nepalese">
                    Nepalese
                  </option>
                  <option className="text-start" defaultValue="new zealander">
                    New Zealander
                  </option>
                  <option className="text-start" defaultValue="ni-vanuatu">
                    Ni-Vanuatu
                  </option>
                  <option className="text-start" defaultValue="nicaraguan">
                    Nicaraguan
                  </option>
                  <option className="text-start" defaultValue="nigerien">
                    Nigerien
                  </option>
                  <option className="text-start" defaultValue="north korean">
                    North Korean
                  </option>
                  <option className="text-start" defaultValue="northern irish">
                    Northern Irish
                  </option>
                  <option className="text-start" defaultValue="norwegian">
                    Norwegian
                  </option>
                  <option className="text-start" defaultValue="omani">
                    Omani
                  </option>
                  <option className="text-start" defaultValue="pakistani">
                    Pakistani
                  </option>
                  <option className="text-start" defaultValue="palauan">
                    Palauan
                  </option>
                  <option className="text-start" defaultValue="panamanian">
                    Panamanian
                  </option>
                  <option
                    className="text-start"
                    defaultValue="papua new guinean"
                  >
                    Papua New Guinean
                  </option>
                  <option className="text-start" defaultValue="paraguayan">
                    Paraguayan
                  </option>
                  <option className="text-start" defaultValue="peruvian">
                    Peruvian
                  </option>
                  <option className="text-start" defaultValue="polish">
                    Polish
                  </option>
                  <option className="text-start" defaultValue="portuguese">
                    Portuguese
                  </option>
                  <option className="text-start" defaultValue="qatari">
                    Qatari
                  </option>
                  <option className="text-start" defaultValue="romanian">
                    Romanian
                  </option>
                  <option className="text-start" defaultValue="russian">
                    Russian
                  </option>
                  <option className="text-start" defaultValue="rwandan">
                    Rwandan
                  </option>
                  <option className="text-start" defaultValue="saint lucian">
                    Saint Lucian
                  </option>
                  <option className="text-start" defaultValue="salvadoran">
                    Salvadoran
                  </option>
                  <option className="text-start" defaultValue="samoan">
                    Samoan
                  </option>
                  <option className="text-start" defaultValue="san marinese">
                    San Marinese
                  </option>
                  <option className="text-start" defaultValue="sao tomean">
                    Sao Tomean
                  </option>
                  <option className="text-start" defaultValue="saudi">
                    Saudi
                  </option>
                  <option className="text-start" defaultValue="scottish">
                    Scottish
                  </option>
                  <option className="text-start" defaultValue="senegalese">
                    Senegalese
                  </option>
                  <option className="text-start" defaultValue="serbian">
                    Serbian
                  </option>
                  <option className="text-start" defaultValue="seychellois">
                    Seychellois
                  </option>
                  <option className="text-start" defaultValue="sierra leonean">
                    Sierra Leonean
                  </option>
                  <option className="text-start" defaultValue="singaporean">
                    Singaporean
                  </option>
                  <option className="text-start" defaultValue="slovakian">
                    Slovakian
                  </option>
                  <option className="text-start" defaultValue="slovenian">
                    Slovenian
                  </option>
                  <option
                    className="text-start"
                    defaultValue="solomon islander"
                  >
                    Solomon Islander
                  </option>
                  <option className="text-start" defaultValue="somali">
                    Somali
                  </option>
                  <option className="text-start" defaultValue="south african">
                    South African
                  </option>
                  <option className="text-start" defaultValue="south korean">
                    South Korean
                  </option>
                  <option className="text-start" defaultValue="spanish">
                    Spanish
                  </option>
                  <option className="text-start" defaultValue="sri lankan">
                    Sri Lankan
                  </option>
                  <option className="text-start" defaultValue="sudanese">
                    Sudanese
                  </option>
                  <option className="text-start" defaultValue="surinamer">
                    Surinamer
                  </option>
                  <option className="text-start" defaultValue="swazi">
                    Swazi
                  </option>
                  <option className="text-start" defaultValue="swedish">
                    Swedish
                  </option>
                  <option className="text-start" defaultValue="swiss">
                    Swiss
                  </option>
                  <option className="text-start" defaultValue="syrian">
                    Syrian
                  </option>
                  <option className="text-start" defaultValue="taiwanese">
                    Taiwanese
                  </option>
                  <option className="text-start" defaultValue="tajik">
                    Tajik
                  </option>
                  <option className="text-start" defaultValue="tanzanian">
                    Tanzanian
                  </option>
                  <option className="text-start" defaultValue="thai">
                    Thai
                  </option>
                  <option className="text-start" defaultValue="togolese">
                    Togolese
                  </option>
                  <option className="text-start" defaultValue="tongan">
                    Tongan
                  </option>
                  <option
                    className="text-start"
                    defaultValue="trinidadian or tobagonian"
                  >
                    Trinidadian or Tobagonian
                  </option>
                  <option className="text-start" defaultValue="tunisian">
                    Tunisian
                  </option>
                  <option className="text-start" defaultValue="turkish">
                    Turkish
                  </option>
                  <option className="text-start" defaultValue="tuvaluan">
                    Tuvaluan
                  </option>
                  <option className="text-start" defaultValue="ugandan">
                    Ugandan
                  </option>
                  <option className="text-start" defaultValue="ukrainian">
                    Ukrainian
                  </option>
                  <option className="text-start" defaultValue="uruguayan">
                    Uruguayan
                  </option>
                  <option className="text-start" defaultValue="uzbekistani">
                    Uzbekistani
                  </option>
                  <option className="text-start" defaultValue="venezuelan">
                    Venezuelan
                  </option>
                  <option className="text-start" defaultValue="vietnamese">
                    Vietnamese
                  </option>
                  <option className="text-start" defaultValue="welsh">
                    Welsh
                  </option>
                  <option className="text-start" defaultValue="yemenite">
                    Yemenite
                  </option>
                  <option className="text-start" defaultValue="zambian">
                    Zambian
                  </option>
                  <option className="text-start" defaultValue="zimbabwean">
                    Zimbabwean
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group col-2 grpPrimary">
            <label className="col-md-6 control-label">Vaccinated</label>
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
                  <option className="text-start" defaultValue="Yes">
                    Yes
                  </option>
                  <option className="text-start" defaultValue="No">
                    No
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PrimarydetailsContent;
