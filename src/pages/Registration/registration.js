import React, { useState, useEffect } from "react";
import MainContainer from "../../components/mainContainer";
import "./registration.scss";
import { withRouter } from "react-router-dom";
import { GiCircle } from "react-icons/gi";

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Registration = (props) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <MainContainer>
        <div className="registration-container">
          <h2 className="registration-title">註冊會員</h2>
          <div className="registration-grid-container">
            <div className="registration-grid-item">
              <div className="registration-item">
                <h4>性別*</h4>
                <div className="registration-gender-select d-flex align-items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="registration-radio-woman"
                    className="display-none"
                  ></input>
                  <label
                    for="registration-radio-woman"
                    className="d-flex align-items-center"
                  >
                    <GiCircle className="registration-select-circle" />
                    <p>女性</p>
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="registration-radio-man"
                    className="display-none"
                  ></input>
                  <label
                    for="registration-radio-man"
                    className=" d-flex align-items-center"
                  >
                    <GiCircle className="registration-select-circle" />
                    <p>男性</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="registration-grid-item">
              <div className="registration-item">
                <h4>生日</h4>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      //   label="生日"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
            </div>
            <div className="registration-grid-item">
              <div className="registration-item">

              </div>
            </div>
            <div className="registration-grid-item">
              <div className="registration-item">
                  
              </div>
            </div>
            <div className="registration-grid-item">
              <div className="registration-item"></div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default withRouter(Registration);
