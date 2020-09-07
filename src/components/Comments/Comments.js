import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "./Comments.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


const Comments = (props) => {
  const { name, email, body } = props.comment;

  const classes = useStyles();

  return (
    <div>
    <List className={classes.root}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
      <Avatar src="/broken-image.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
             {email}
            </Typography>
             ---{body}
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
  </List>
    </div>
  );
};

export default Comments;
