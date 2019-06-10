import React from "react";
import axios from 'axios';
import StudyItem from './StudyItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const degreeNames = ['خطا','کاردانی','کارشناسی','کارشناسی ارشد','دکتری']
function StudyItemBox(props) {
    // const { classes } = props;
    return (
        <div>
            
            {
                props.items.map((item,index) => {
                    // <StudyItem key={index} item={item}/>
                    axios.get('http://localhost:8000/charts/'+item.chart)
                    .then((res)=>                
                        (<StudyItem key={index} degree={degreeNames[item.degree]} chart={res.data.title}/>)
                    )
                }
                )
            }
             
          <Grid item xs={4}>
            {/* <Card className={classes.card}> */}
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    <Icon color="primary" fontSize="large">
                    {/* <Icon className={classes.icon} color="primary" fontSize="large"> */}
                      add_circle
                        </Icon>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </div>
    );
}

export default StudyItemBox;

