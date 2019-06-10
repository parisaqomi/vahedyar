import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StudyItemBox from '../../components/StudyItem/StudyItemBox';

const styles = theme => ({
  card: {
    // maxWidth: 345,
    minHeight: 200,
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 8,
  },
  media: {
    objectFit: 'cover',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class StudyPanel extends React.Component {
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

    axios.defaults.withCredentials = true;
    //http request goes here and do the inner settimeout function in resolve
    axios.get('http://127.0.0.1:8000/studies/').then((response) => {
      this.setState({
        loading: false,
        data: response.data
      });

    })
    // setTimeout(() => {
    //   this.setState({
    //     loading: false,
    //     data: [
    //       {
    //         degree: 'کارشناسی ارشد',
    //         id: 12,
    //         chart: 3,
    //       },
    //       {
    //         degree: 'کارشناسی',
    //         id: 13,
    //         chart: 3,
    //       },
    //     ]
    //   });
    // }, 3000)
  }

  render() {
    
    const { loading, data } = this.state;

    return (
      <div>
        <Grid container spacing={24}>
          {/* <StudyItem degree={'123'} chart={'321'}></StudyItem>
          <StudyItem degree={'ABX'} chart={'XBA'}></StudyItem> */}
                { (loading) ? <div>...loading</div> : null }
                { (!loading && data) ? <StudyItemBox items={data} /> : null}
                
          
        </Grid>
      </div>
    );
  }
}

StudyPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyPanel);