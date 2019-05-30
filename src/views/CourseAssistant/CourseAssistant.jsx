import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CourseItemBoxes from "components/CourseAssistant/CourseItem/CourseItemBoxes.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

class CourseAssistant extends React.Component{
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
  }

  state = {
    loading: false, 
    data: null
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      loading: true
    });
    console.log('loading data')

    //http request goes here and do the inner settimeout function in resolve
    setTimeout(()=> {
      this.setState({
        loading: false,
        data: [
          {
              name:'پایگاه',
              id: 12,
              vahedNazari: 3,
              vahedAmali: 0
          },
          {
              name:'سیستم',
              id: 13,
              vahedNazari: 3,
              vahedAmali: 0
          },
        ]
      });
    },3000)
  }

  render() {
    const { classes } = this.props;
    const {loading, data} = this.state;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="primary">
              <h4 className={classes.cardTitleWhite}> پیشنهاد دروس ترم آتی</h4>
            </CardHeader>
            <CardBody>
  
                <GridItem xs={12} sm={12} md={12}>
                { (loading) ? <div>...loading</div> : null }
                { (!loading && data) ? <CourseItemBoxes items={data} onDelete={this.loadData} /> : null}
                </GridItem>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

CourseAssistant.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(CourseAssistant);
