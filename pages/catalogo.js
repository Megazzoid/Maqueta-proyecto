/*eslint-disable*/
import React, { useState, useContext } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
// @material-ui icons
import Mail from "@mui/icons-material/Mail";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Footer from "/components/Footer/Footer.js";
// sections for this page

import SectionPlans from "../componentesPropios/SectionPlans.js";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js";

//Propio
import FooterGlobal from "../componentesPropios/FooterGlobal";
import { getPlanes } from "../firebaseConexion/productos.js";

const useStyles = makeStyles(styles);

export default function CatalogoPage() {
  /* console.log(user) */

  const [planes, setPlanes] = useState([]);

  const [simpleSelect, setSimpleSelect] = useState("");

  React.useEffect(() => {
    getPlanes()
      .then((result) => {
        setPlanes(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();

  return (
    <div>
      {/*       <Header
        brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      /> */}
      <Parallax image='/img/examples/clark-street-merc.jpg' filter='dark' small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>Ecommerce Page!</h1>
                <h4>
                  Free global delivery for all products. Use coupon{" "}
                  <b>25summer</b> for an extra 25% Off
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPlans planes={planes} />
      </div>

      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
        style={{ backgroundImage: "url('/img/examples/ecommerce-header.jpg')" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id='emailPreFooter'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email...",
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color='rose'
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <FooterGlobal />
    </div>
  );
}
