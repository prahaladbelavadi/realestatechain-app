import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
};

class ProgressBar extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Grid container>
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.root}
        />  
      </Grid>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressBar);