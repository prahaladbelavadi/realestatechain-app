import React, { Component } from 'react'
import { Grid, InputLabel, withStyles } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid,
  Header,
  Footer
} from "../../components";

import UserProfile from "../../user/layouts/profile/Profile.js";

import {
  Dashboard as DashboardIcon,
  Person,
} from "@material-ui/icons";

import logo from '../../logo.png'

import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

import avatar from '../../logo.png';

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    const { classes, ...rest } = this.props;
    return(
      <div className={classes.wrapper}>

        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={dashboardRoutes}
            {...rest}
          />
          <div className={classes.content}>
            <Grid container>
              <ItemGrid xs={12} sm={12} md={8}>
                <RegularCard
                  cardTitle="Edit Profile"
                  cardSubtitle="Complete your profile"
                  content={
                    <div>
                      <Grid container>
                        <ItemGrid xs={12} sm={12} md={5}>
                          <CustomInput
                            labelText="Company (disabled)"
                            id="company-disabled"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              disabled: true
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={3}>
                          <CustomInput
                            labelText="Username"
                            id="username"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Email address"
                            id="email-address"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </ItemGrid>
                      </Grid>
                      <Grid container>
                        <ItemGrid xs={12} sm={12} md={6}>
                          <CustomInput
                            labelText="First Name"
                            id="first-name"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={6}>
                          <CustomInput
                            labelText="Last Name"
                            id="last-name"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </ItemGrid>
                      </Grid>
                      <Grid container>
                        <ItemGrid xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="City"
                            id="city"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Country"
                            id="country"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Postal Code"
                            id="postal-code"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </ItemGrid>
                      </Grid>
                      <Grid container>
                        <ItemGrid xs={12} sm={12} md={12}>
                          <InputLabel style={{ color: "#AAAAAA" }}>
                            About me
                          </InputLabel>
                          <CustomInput
                            labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                            id="about-me"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              multiline: true,
                              rows: 5
                            }}
                          />
                        </ItemGrid>
                      </Grid>
                    </div>
                  }
                  footer={<Button color="primary">Update Profile</Button>}
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <ProfileCard
                  avatar={avatar}
                  subtitle="Real Estate Chain, LLC"
                  title="One Beacon Street"
                  description="Offices of Real Estate Chain, LLC"
                  footer={
                    <Button color="primary" round>
                      Follow
                    </Button>
                  }
                />
              </ItemGrid>
            </Grid>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default withStyles(appStyle)(Dashboard)
