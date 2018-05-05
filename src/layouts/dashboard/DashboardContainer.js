import Dashboard from './Dashboard'
import { drizzleConnect } from 'drizzle-react'
import { withStyles } from "material-ui";

//import appStyle from "../../assets/jss/material-dashboard-react/appStyle.jsx";

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus
  }
}

const DashboardContainer = drizzleConnect(Dashboard, mapStateToProps);

export default DashboardContainer
