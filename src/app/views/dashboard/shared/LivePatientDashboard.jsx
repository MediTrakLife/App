import React, { useState } from "react";
import { Card, Grid, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Graph } from "./Graph/Graph";

const useStyles = makeStyles(theme => ({
  pinkBgClr: {
    backgroundColor: "#e31d93",
    stroke: "#e31d93"
  },
  pinkClr: {
    color: "#e31d93"
  },
  purpleBgClr: {
    backgroundColor: "#5f1de3"
  },
  purpleClr: {
    color: "#5f1de3",
    stroke: "#5f1de3"
  },
  blueBgClr: {
    backgroundColor: "#1dcae3"
  },
  blueClr: {
    color: "#1dcae3",
    stroke:"#1dcae3"
  },
  redClr: {
    color: "#e31d1d"
  },
  orngBgClr: {
    backgroundColor: "#fb873d"
  },
  orngClr: {
    color: "#fb873d"
  }
}));

const TableCard = props => {
  const [avgRps, setAvgRps] = useState(22)
  const [avgSpo, setAvgSpo] = useState(95)
  const [avgPulse, setAvgPulse] = useState(82)
  const [avgTemp, setAvgTemp] = useState(98.6)
  const [avgBPlow, setAvgBPlow] = useState(78)
  const [avgBPhigh, setAvgBPhigh] = useState(118)
  const [avgHRM, setAvgHRM] = useState(89)
  const { RESP, SPO,PULSE } = Graph(setAvgRps,setAvgSpo,setAvgPulse,setAvgTemp,setAvgBPlow,setAvgBPhigh,setAvgHRM)
  const classes = useStyles();
  // const avgRps = 22;
  // const avgSpo = 95;
  // const avgPulse = 82;
  // const avgTemp = 98.6;
  return (
    <Card elevation={3} className="h-full pt-5 mb-6">
      <div className="card-title px-6 mb-8">live patient dashboard</div>
      <div className="p-2">
        <Grid container spacing={3}>
          {/* left line graph */}
          <Grid item sm={9} className="p-0 ">
            <Grid container spacing={0} className="pl-11 pr-2">
              <Grid
                item
                sm={12}
                className="border-dotted  border-t-2 flex flex-col justify-center items-center relative h-100 p-2 "

              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  <Badge
                    variant="dot"
                    classes={{
                      root: "mr-2",
                      badge: classes.pinkBgClr
                    }}
                  />
                           RESP
                    </small>
                <div className={`${classes.pinkClr} text-32 font-black`} style={{ height: "inherit", width: "100%" }} id="mainGrid">
                  <RESP style={classes.pinkBgClr} >
                  </RESP>
                </div>
              </Grid>
              <Grid
                item
                sm={12}
                className="border-dotted  border-t-2 flex flex-col justify-center items-center relative h-100 p-2 "
              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  <Badge
                    variant="dot"
                    classes={{
                      root: "mr-2",
                      badge: classes.purpleBgClr
                    }}
                  />
                  SPO<sub>2</sub>
                </small>
                <div
                  className={`${classes.purpleClr} text-32 font-black`}
                  style={{ height: "inherit", width: "100%" }}
                >
                  <SPO style={classes.purpleClr} />
                </div>
                <small
                  className={`p-3 font-bold absolute bottom-0 right-0 ${classes.purpleClr}`}
                >
                  %
                </small>
              </Grid>
              <Grid
                item
                sm={12}
                className="border-dotted border-t-2 flex flex-col justify-center items-center relative h-100 p-2 "
              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  <Badge
                    variant="dot"
                    classes={{
                      root: "mr-2",
                      badge: classes.blueBgClr
                    }}
                  />
                  PULSE
                </small>
                <div className={`${classes.blueClr} text-32 font-black`} style={{height:"inherit",width:"100%"}}>
                  <PULSE style={classes.blueClr} />
                </div>
                <small
                  className={`p-3 font-bold absolute bottom-0 right-0 ${classes.blueClr} `}
                >
                  BPM
                </small>
              </Grid>
              <Grid
                item
                sm={12}
                className="border-t-2 flex flex-col justify-center items-center relative h-100 p-2 "
              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  <Badge
                    variant="dot"
                    classes={{
                      root: "mr-2",
                      badge: classes.orngBgClr
                    }}
                  />
                  BP
                </small>
                <div className={`${classes.orngClr} text-32 font-black`}>
                  {avgBPhigh}/{avgBPlow} {` (${avgHRM})`}
                </div>
                <small
                  className={`p-3 font-bold absolute bottom-0 right-0 ${classes.redClr} `}
                >
                  &#8457;
                </small>
              </Grid>
            </Grid>
          </Grid>
          {/* Avg box  */}
          <Grid item sm={3} className="border p-0">
            <Grid container spacing={0}>
              <Grid
                item
                sm={12}
                className="flex flex-col justify-center items-center relative h-100 border p-2"
              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  RR
                </small>
                <div className={`${classes.pinkClr} text-32 font-black`}>
                  {avgRps}
                </div>
                <small className={`p-3 font-bold absolute bottom-0 right-0 `}>
                  RPS
                </small>
              </Grid>
              <Grid
                item
                sm={12}
                className="flex flex-col justify-center items-center relative h-100 border p-2"
              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  SPO2
                </small>
                <div className={`${classes.purpleClr} text-32 font-black`}>
                  {avgSpo}
                </div>
                <small
                  className={`p-3 font-bold absolute bottom-0 right-0 ${classes.purpleClr}`}
                >
                  %
                </small>
              </Grid>
              <Grid
                item
                sm={12}
                className="flex flex-col justify-center items-center relative h-100 border p-2"
              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  PULSE
                </small>
                <div className={`${classes.blueClr} text-32 font-black`}>
                  {avgPulse}
                </div>
                <small
                  className={`p-3 font-bold absolute bottom-0 right-0 ${classes.blueClr} `}
                >
                  BPM
                </small>
              </Grid>
              <Grid
                item
                sm={12}
                className="flex flex-col justify-center items-center relative h-100 border p-2"
              >
                <small className="p-3 font-bold absolute top-0 left-0">
                  TEMP
                </small>
                <div className={`${classes.redClr} text-32 font-black`}>
                  {avgTemp}
                </div>
                <small
                  className={`p-3 font-bold absolute bottom-0 right-0 ${classes.redClr} `}
                >
                  &#8457;
                </small>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default TableCard;
