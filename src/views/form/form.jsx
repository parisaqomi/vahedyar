import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
});

class NativeSelects extends React.Component {
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
     
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);