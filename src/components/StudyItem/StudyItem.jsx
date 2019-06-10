import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class StudyItem extends React.Component {
    // state={
    //     degree:null,
    //     chart:null
    // }
    render (){
        const { item } = this.props;
        return(
        <div>
            <Grid item xs={4}>
            {/* <Card className={classes.card}></Card> */}
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">
                                {this.props.degree}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h4">
                                {this.props.chart}   
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            {/* {

                item.map((x) => 
                (console.log(x)
                ))
            } */}
            </Grid>
        </div>
        );
}
}
export default StudyItem;
