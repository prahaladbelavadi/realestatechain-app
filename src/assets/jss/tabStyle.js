// ##############################
// // // Dashboard styles
// #############################

import { greenCardColor, darkModeColor } from "./material-dashboard-react.jsx";

const tabStyle = {
  tab: {
	  textAlign: "center",
	  cursor: "pointer",
	  border: "2px solid transparent",
	  padding: "12px 6px",
	  backgroundColor: darkModeColor
	},
	tabActive: {
	  backgroundColor: "transparent"
	},
	tabPanel: {
		display:"flex",
		top: {
	  	flexDirection: "column",
	  },
	  bottom: {
		  flexDirection: "column-reverse"
		},
		left: {
		  flexDirection: "row",
		},
		right: {
		  flexDirection: "row-reverse"
		}
	},
	tabStrip: {
  	backgroundColor: darkModeColor,
  	display: "flex",
  	justifyContent: "flex-start",
  	indicator: {
		  justifyContent: "center"
		},
	}
};

export default tabStyle;
