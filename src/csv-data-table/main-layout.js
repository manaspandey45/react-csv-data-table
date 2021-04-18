
import React from 'react';

import { Grid, Row, Column } from "carbon-components-react";
import Header from './header'
import DataController from './csv-reader'



class MainLayout extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {}

  }



  render() {

    return <Grid condensed >

      <Header />



      <Row>
        <DataController></DataController>

      </Row>

    </Grid>

  }
}

export default MainLayout;