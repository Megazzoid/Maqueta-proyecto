/*eslint-disable*/
import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Group from "@mui/icons-material/Group";
import Email from "@mui/icons-material/Email";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import FormControlLabel from "@mui/material/FormControlLabel";
//firebase
import signUp from "../firebaseConexion/signup";

import signupPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
import { useRouter } from "next/router";

const useStyles = makeStyles(signupPageStyle);

export default function Registro({ ...rest }) {
  const router = useRouter();
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const registrar = () => {
    signUp(inputEmail, inputPassword).then((res) => {
      if (res.error) {
        console.log("hubo un error, mostrar algo lindo");
        console.log("error", res.error);
      } else {
        router.push("inicioSesion");
      }
    });
  };
  const goTologin = () => {
    router.push("inicioSesion");
  };
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justifyContent='center'>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Registro</h2>
                <CardBody>
                  <GridContainer justifyContent='center'>
                    <GridItem xs={12} sm={5} md={5}>
                      {/*                       <InfoArea
                        className={classes.infoArea}
                        title="Marketing"
                        description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Fully Coded in HTML5"
                        description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                        icon={Code}
                        iconColor="primary"
                      /> */}
                      <InfoArea
                        className={classes.infoArea}
                        title='¿Por qué registrarse?'
                        description='Al registrarte en Latinove adquieres la posibilidad de contratar servicios de Streaming y podrás contactarte a nuestra árae de soporte en caso de que tengas algún problema.'
                        icon={Group}
                        iconColor='info'
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                      <form className={classes.form}>
                        <CustomInput
                          setText={setInputEmail}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position='start'
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Email",
                          }}
                        />
                        <CustomInput
                          setText={setInputPassword}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position='start'
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Contraseña",
                            type: "password",
                          }}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={<></>}
                          label={
                            <span>
                              ¿Ya tienes cuenta?{" "}
                              <a
                                onClick={() => {
                                  goTologin();
                                }}
                              >
                                Inicia sesion
                              </a>
                              .
                            </span>
                          }
                        />
                        <br />
                        <br />
                        <div className={classes.textCenter}>
                          <Button onClick={registrar} round color='primary'>
                            Registrarse
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()}
                <a href='' target='_blank'>
                  , Hivek
                </a>{" "}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
