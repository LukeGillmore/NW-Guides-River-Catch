import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
  },
}));

let LinearLoadingBar = (props) => {
  const classes = useStyles();
  const {progressBarStatus} = props;
  return (
    progressBarStatus ? (
      <div className={classes.root}>
        <LinearProgress
          style={{ margin: "0", padding: "0"}}
          color="primary"
        />
      </div>
    ) : null
  );
};

const mapStateToProps = (state) => {
  return ({
    progressBarStatus: state.ui.progressBarStatus
  })
};

export default connect(
  mapStateToProps,
  null
)(LinearLoadingBar);


