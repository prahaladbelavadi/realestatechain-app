import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ItemGrid from '../Grid/ItemGrid.jsx';
import RegularCard from '../Cards/RegularCard.jsx';
import Table from '../Table/Table.jsx';

class WalletTasks extends Component {
  constructor(props, { authData }) {
    super(props)
  }

  render() {
    return (
      <RegularCard
        plainCard
        cardTitle="Property Wallet Strength"
        cardSubtitle="Complete the wallet to increase its value"
        content={
          <Table
            tableHeaderColor="primary"
            tableData={[
              ["Upload 3D Model", "50% Boost"],
              ["Upload Property Data", "50% Boost"],
              ["Upload Floor Plan","Complete"],
              ["Get Verified", "Complete"]
            ]}
          />
        }
      />
    );
  }
}

export default WalletTasks;