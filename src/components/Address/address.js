import React, { useState, useEffect } from "react";
import "./address.scss";

import FormInput from "../../components/FormInput/FormInput";

//select
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//Select CSS(material UI)
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Address = (props) => {
  //縣市區
  const [cities, setCities] = useState([]);
  const [address, setAddress] = useState("");

  //Select CSS(material UI)
  const classes = useStyles();
  //selected
  const [citiesSelected, setCitiesSelected] = React.useState("");
  const [districtsSelected, setDistrictsSelected] = React.useState("");

  //縣市區選擇
  const addressChange = (event) => {
    switch (event.target.name) {
      case "citiesSelected":
        props.setCities && props.setCities(cities[event.target.value].CityName);
        setCitiesSelected(event.target.value);
        break;
      case "districtsSelected":
        props.setDistricts &&
          props.setDistricts(
            cities[citiesSelected].AreaList[event.target.value].AreaName
          );
        props.setPostCode &&
          props.setPostCode(
            cities[citiesSelected].AreaList[event.target.value].ZipCode
          );
        setDistrictsSelected(event.target.value);
        break;
      case "address":
        props.setAddress && props.setAddress(event.target.value);
        setAddress(event.target.value);
        break;
      default:
        break;
    }
    console.log(props);
  };

  //取得縣市資料
  const getCities = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json"
    );

    // console.log(response)
    const obj = await response.json();

    // console.log(obj);
    return obj;
  };

  //將縣市資料寫進狀態cities中
  useEffect(() => {
    (async () => {
      let cities = await getCities();
      // console.log("cities", cities);
      setCities(cities);
    })();
  }, []);

  return (
    <div className="address-container d-flex align-items-end">
      <FormControl className={classes.formControl}>
        <InputLabel id="cities-label">縣市</InputLabel>
        <Select
          labelId="cities-label"
          id="cities"
          name="citiesSelected"
          value={citiesSelected}
          onChange={addressChange}
        >
          {cities.length
            ? cities.map((el, index) => {
                return <MenuItem value={index}>{el.CityName}</MenuItem>;
              })
            : ""}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="districts-label">鄉市鎮區</InputLabel>
        <Select
          labelId="districts-label"
          id="districts"
          name="districtsSelected"
          value={districtsSelected}
          onChange={addressChange}
        >
          {citiesSelected !== "" ? (
            cities[citiesSelected].AreaList.map((el, index) => {
              return (
                <MenuItem value={index}>
                  {el.ZipCode} {el.AreaName}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem value="">未選縣市</MenuItem>
          )}
        </Select>
      </FormControl>
      <FormInput
        type="text"
        name="address"
        value={address}
        handleChange={addressChange}
        label="地址"
        required
      />
    </div>
  );
};

export default Address;
