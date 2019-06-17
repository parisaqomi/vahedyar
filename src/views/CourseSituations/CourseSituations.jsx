import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  TextRight: {
    textAlign: "right",
  },
  blueHeader: {
    backgroundColor: "#3a99d9 !important",
  },
  whiteText: {
    color: "#fff !important",
  }
});

class CourseSituations extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    // const { expanded } = this.state;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}> وضعیت دروس</h4>
            </CardHeader>
            <CardBody>
              <Table className={classes.TextRight}
                tableHeaderColor="primary"
                tableHead={["نام درس", "واحد عملی ", "واحد نظری ", "نمره", " "]}
                tableData={[]}
              />
              <div className={classes.root}>

                <ExpansionPanel >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.whiteText} />} className={classes.blueHeader}>
                    <Typography className={classes.heading && classes.whiteText}> دروس اختیاری</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      مدیریت پروژه
                </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>



              </div>

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

CourseSituations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseSituations);




