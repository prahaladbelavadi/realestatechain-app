// ##############################
// // // Dashboard styles
// #############################

import { greenCardColor } from "./material-dashboard-react.jsx";

const tabStyle = {
  tab: {
	  textAlign: "center",
	  cursor: "pointer",
	  border: "2px solid transparent",
	  padding: "12px 6px"
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
  	backgroundColor: "#e8e8e8",
  	display: "flex",
  	justifyContent: "flex-start",
  	indicator: {
		  justifyContent: "center"
		},
	}
};

export default tabStyle;
