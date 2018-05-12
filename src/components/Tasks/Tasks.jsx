import React from "react";
import {
  withStyles,
  Checkbox,
  IconButton,
  Tooltip
} from "material-ui";
import { Edit, Close, Check } from "@material-ui/icons";

import PropTypes from "prop-types";

import {
  ProfileCard,
  RegularCard,
  Table,
  Button,
  TaskButton,
  ProgressBar
} from "../../components";
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components';

import tasksStyle from "../../assets/jss/material-dashboard-react/tasksStyle.jsx";

class Tasks extends React.Component {
  state = {
    checked: this.props.checkedIndexes
  };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };


  render() {
    const { classes, tasksIndexes, tasks, accounts } = this.props;
    return (
      <RegularCard
        plainCard
        cardTitle="Property Wallet Strength &nbsp;&nbsp;&nbsp; 50%"
        content={
          <div>
            <ProgressBar />
            <Table
              tableHeaderColor="primary"
              tableData={[
                [<TaskButton buttonText="Upload Photos" />, "50% Boost"],
                [<TaskButton buttonText="Upload Property Data" />, "50% Boost"],
                [<TaskButton buttonText="Upload Floorplan" />, "Complete"],
                [<TaskButton buttonText="Get Verified" />, "Complete"]
              ]}
            />
          </div>
        }
      />
    );
  }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node)
};

export default withStyles(tasksStyle)(Tasks);
