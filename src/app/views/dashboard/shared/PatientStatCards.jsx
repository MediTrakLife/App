import React from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Tooltip,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  icon: {
    fontSize: "44px",
    opacity: 0.6,
    color: theme.palette.primary.main
  }
});

const StatCards = ({ classes }) => {
  return (
    <Grid container spacing={3} className="">
      <Grid item xs={12} md={5}>
        <Card className="h-full p-sm-24 bg-paper flex-col" elevation={6}>
          <div className="flex justify-between flex-grow items-center">
            <p className="text-20 font-semibold">Patient Profile</p>
            <Tooltip title="View Details" placement="bottom">
              <IconButton>
                <Icon>more_horiz</Icon>
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex justify-between flex-grow mt-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center">
                <img
                  className="h-72 w-72 rounded-full mx-auto"
                  src="/assets/images/faces/2.jpg"
                  alt="user"
                />
              </div>
              <div className="mt-2">
                <h5 className="text-20">John Buffet</h5>
                <small className="text-14 text-muted">
                  j.buffet@outlook.com
                </small>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center text-left mr-8">
              <h6 className="text-24 font-bold text-left">Bio</h6>
              <small className="text-14 leading-normal font-medium text-left">
                Age: 51
              </small>
              <small className="text-14 leading-normal font-medium text-left">
                Gender: Male
              </small>
              <small className="text-14 leading-normal font-medium text-left">
                Race: Caucasian
              </small>
              <small className="text-14 leading-normal font-medium text-left">
                Martial Status: Married
              </small>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={7}>
        <Card className="h-full p-sm-24 bg-paper flex-col" elevation={6}>
          <div className="flex justify-between flex-grow items-center">
            <p className="text-20 font-semibold">Device Connected</p>
            <Tooltip title="View Details" placement="bottom">
              <IconButton>
                <Icon>more_horiz</Icon>
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex justify-between flex-grow mt-4 mx-10">
            <div className="flex flex-col items-start justify-center text-left mr-8">
              <small className="text-14 leading-loose font-medium text-left">
                Wound Camera
              </small>
              <small className="text-14 leading-loose font-medium text-left">
                Digital Stethoscope
              </small>
              <small className="text-14 leading-loose font-medium text-left">
                EKG
              </small>
              <small className="text-14 leading-loose font-medium text-left">
                Digital Otoscope
              </small>
              <Button
                color="primary"
                className="font-bold px-4"
                style={{ backgroundColor: "rgba(0, 84, 254, 0.08)" }}
              >
                Vital Signs Monitor
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center">
                <img
                  className="h-100 w-100  mx-auto"
                  src="/assets/images/faces/2.jpg"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(StatCards);
