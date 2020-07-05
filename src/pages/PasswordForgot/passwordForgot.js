import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainContainer from "../../components/mainContainer";
import FormInput from "../../components/FormInput/FormInput";
import Address from "../../components/Address/address";
import "./passwordForgot.scss";
import { Redirect, withRouter } from "react-router-dom";

//Redux
import { userLogin, checkLogin } from "../../Redux/user/userAction";

//react-icon
import { FiCheckCircle, FiSquare, FiCheckSquare } from "react-icons/fi";
// import { GiSquare } from "react-icons/gi";
//material UI
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const PasswordForgot = (props) => {
    //Redux
    const { user, userLogin } = props;

    //確認
    const [confirm, setConfirm] = useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
        },
    }));

    const [email, setEmail] = React.useState("");
    const classes = useStyles();

    //文字欄
    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <>
            <div className=" position-relative">
                <div className="all-page">
                    <figure>
                        <img src="/images/banner/password-page.jpg" />
                    </figure>
                </div>
                {/* <MainContainer> */}
                <div className="password-container position-absolute">
                    <h2 className="password-title">忘記密碼</h2>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl>
                            <InputLabel htmlFor="component-simple">
                                email
                            </InputLabel>
                            <Input
                                id="component-simple"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                handleChange={handleChange}
                                required
                            />
                        </FormControl>
                    </form>
                    <div className="">
                        <Button
                            className="password-button"
                            variant="outlined"
                            // onClick={}
                        >
                            送出
                        </Button>
                    </div>
                </div>

                {/* <div className="">
                        <Button
                            className="registration-button"
                            variant="outlined"
                            onClick={}
                        ></Button>
                    </div>
                    <div className="">
                        <Button
                            className="registration-button"
                            variant="outlined"
                            onClick={}
                        ></Button>
                    </div> */}
                {/* </MainContainer> */}
            </div>
        </>
    );
};

const mapStateToProps = (store) => {
    return { user: store.user };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userLogin, checkLogin }, dispatch);
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PasswordForgot)
);
