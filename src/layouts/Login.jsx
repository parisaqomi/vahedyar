import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import sidebar2 from '../assets/img/sidebar2.jpg';
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};
const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    
  },
   root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  centerFlex:{
    display:'flex',
    justifyContent: 'center' ,
  }
});


class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root} dir="rtl">
      <Grid container spacing={0}>
      <Grid item xs={6} className={classes.centerFlex}>
       <Grid item xs={6}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="ورود" />
              <Tab label="عضویت" />
            </Tabs>
          </AppBar>
          <SwipeableViews 
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}> 
          <main className={classes.main} fullWidth>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
        <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <TextField
          id="username-login"
          label="نام کاربری"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
          </FormControl>


          <FormControl margin="normal" required fullWidth>
            <TextField
          id="password-login"
          label="گذرواژه "
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
          </FormControl>
           <Button display="block" type="submit" variant="contained" color="primary"
            className={classes.submit}
          >
            ورود
          </Button>
          <Button href="" className={classes.button}>
        فراموشی رمز عبور
      </Button>
         
        </form>
      </Paper>
      </main>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <main className={classes.main} fullWidth>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <TextField
          id="username-signin"
          label="نام و نام خانوادگی"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
          </FormControl>


          <FormControl margin="normal" required fullWidth>

        <TextField
          id="email-login"
          label="رایانامه"
          className={classes.textField}
          type="email"
          name="email"
          margin="dense"
          variant="outlined"
        />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
          id="pass-signin"
          label="گذرواژه"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
          id="re-pass-signin"
          label=" تکرار گذرواژه "
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
          </FormControl>
           <Button display="block" type="submit" variant="contained" color="primary"
            className={classes.submit}
          >
            عضویت
          </Button>
          
         
        </form>
      </Paper>
    </main>

          </TabContainer>
        </SwipeableViews>
         </Grid>
      </Grid>
      <Grid item xs={6}>
       {/* ax miad o bg */}
        <img src={sidebar2} />;
      </Grid>
      </Grid>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);