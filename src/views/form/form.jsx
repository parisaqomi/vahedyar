import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  firstTimeForm:{
    display: "flex",
    flexDirection: "column",
    border: "1px solid ",
    borderRadius: "3px",
    width: "90%",
    margin: "auto",
    padding: "1em",
  },
  submitButton:{
    width:"10%",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
});

class firstTimeForm extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

//   componentDidMount() {
//     this.setState({
//       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
//     });
//   }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Card>
        <CardHeader color="primary">
         <h4 className={classes.cardTitleWhite}> برای دسترسی به چارت دروس خود لطفا فرم زیر را تکمیل نمایید</h4>
        </CardHeader>
        <CardBody>
          <form className={classes.firstTimeForm}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="degree-native-helper">مقطع تحصیلی </InputLabel>
              <NativeSelect
                value={this.state.degree}
                onChange={this.handleChange('degree')}
                input={<Input name="degree" id="degree-type" />}
              >
                <option value="" />
                <option value={1}>کارشناسی </option>
                <option value={2}>کارشناسی ارشد</option>
                <option value={3}>دکتری</option>
              </NativeSelect>
              <FormHelperText>مقطع تحصیلی خود را مشخصی کنید</FormHelperText>
            </FormControl>       
        
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="university-native-helper">دانشگاه  </InputLabel>
              <NativeSelect
                value={this.state.university}
                onChange={this.handleChange('university')}
                input={<Input name="university" id="university-type" />}
              >
                <option value="" />
                <option value={1}>تهران مرکز </option>
                <option value={2}>تهران غرب </option>
                <option value={3}>علم و صنعت</option>
              </NativeSelect>
              <FormHelperText> دانشگاه خود را مشخصی کنید</FormHelperText>
            </FormControl>       
        
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="faculty-native-helper">دانشکده / گروه  </InputLabel>
              <NativeSelect
                value={this.state.faculty}
                onChange={this.handleChange('faculty')}
                input={<Input name="faculty" id="faculty-type" />}
              >
                <option value="" />
                <option value={1}>فنی و مهندسی </option>
                <option value={2}>هنر و معماری</option>
                <option value={3}>پزشکی</option>
              </NativeSelect>
              <FormHelperText> دانشکده خود را مشخصی کنید</FormHelperText>
            </FormControl>       
        
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="chart-native-helper">رشته (چارت)  </InputLabel>
              <NativeSelect
                value={this.state.chart}
                onChange={this.handleChange('chart')}
                input={<Input name="chart" id="chart-type" />}
              >
                <option value="" />
                <option value={1}>کامپیوتر ۹۳ </option>
                <option value={2}>مکانیک ۹۳ </option>
              </NativeSelect>
              <FormHelperText>رشته خود را مشخصی کنید</FormHelperText>
            </FormControl>       
            <div className={classes.submitButton}>
              <Button variant="contained" color="primary" size="medium" className={classes.button}>
                تایید
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
      </div>
    );
  }
}

firstTimeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(firstTimeForm);