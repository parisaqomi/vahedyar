import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import Accessibility from "@material-ui/icons/Accessibility";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import rtlStyle from "assets/jss/material-dashboard-react/views/rtlStyle.jsx";

//import avatar from "assets/img/faces/marc.jpg";


class MyDashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning" stats icon className={classes.floatRight}>
                <CardIcon color="warning" className={classes.floatRight}>
                  <Icon>content_copy</Icon>
                </CardIcon>
                
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <h3 className={classes.cardTitle}>
                     تعداد واحد پاس شده
                  </h3>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
 
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                
              </CardHeader>
              <CardFooter stats>
              <h3 className={classes.cardTitle}> تعداد کل واحدها</h3>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>

          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
              </CardBody>
              <CardFooter chart>
                <h3 className={classes.cardTitle}> روند تحصیل </h3>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
              </CardBody>
              <CardFooter chart>
              <h3 className={classes.cardTitle}> معدل کل تا کنون  </h3>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        
      </div>
    );
  }
}

MyDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(rtlStyle)(MyDashboard);
