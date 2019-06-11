import React from 'react'
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class StudyItem extends React.Component {
    state={
        degree:this.props.degree,
        chartId:this.props.chartId,
        chartName:null
    }
    componentDidMount(){
        axios.get('http://localhost:8000/charts/'+this.state.chartId)
        .then((res)=> {
            this.setState({chartName:res.data.title})

        })
    }
    render (){
       
        return(
            
        <div>
            {/* <Card className={classes.card}></Card> */}
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">
                                {this.state.degree}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h4">
                                {this.state.chartName}   
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            {/* {

                item.map((x) => 
                (console.log(x)
                ))
            } */}
        </div>
        );
}
}
export default StudyItem;
