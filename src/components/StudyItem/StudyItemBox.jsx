import React from "react";
import StudyItem from './StudyItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const degreeNames = ['خطا','کاردانی','کارشناسی','کارشناسی ارشد','دکتری']
function StudyItemBox(props) {
    // const { classes } = props;
    return (
        <div>
            
            {
                props.items.map((item,index) => 
                                   
                        (<StudyItem key={index} degree={degreeNames[item.degree]} chartId={item.chart}/>)
                    )
                }
             
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
        </div>
    );
}

export default StudyItemBox;

