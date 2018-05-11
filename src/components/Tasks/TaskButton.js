import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function TaskButton(props) {
  const { classes, buttonText, buttonAction } = props;

  return (
    <Button className={classes.button} onClick={buttonAction || ( () => {})} data-something="something">
      { buttonText }
    </Button>
  );
}

TaskButton.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func
};

export default withStyles(styles)(TaskButton);