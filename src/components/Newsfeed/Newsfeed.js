import React, { useState } from "react";
import './Newsfeed.css'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Newsfeed = (props) => {
  const { title, body , id} = props.post;


  const classes = useStyles();

  return (
    <div className="newsfeed">
      <Card className={classes.root} style={{border: '1px solid purple', height: '250px' , marginLeft: '20px'}} >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Button size="small" color="primary">
           <Link to={`/post/${id}`}>Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Newsfeed;
