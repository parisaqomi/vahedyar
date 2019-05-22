import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  card: {
   // maxWidth: 345,
   minHeight: 200,
   textAlign: 'center',
   paddingTop: theme.spacing.unit * 8,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
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

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <div>
        <Grid container spacing={24}>
            <Grid item xs={4}>
                <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                    کارشناسی کامپیوتر
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                    تهران غرب
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                    کارشناسی ارشد کامپیوتر
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                    تهران مرکز
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                        <Icon className={classes.icon} color="primary" fontSize="large">
                            add_circle
                        </Icon> 
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);