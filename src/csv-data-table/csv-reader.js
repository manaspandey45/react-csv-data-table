import React from 'react';
import Papa from 'papaparse';
import { withRouter } from 'react-router-dom';
import {
  DataTable
} from "@carbon/ibm-security";

class DataController extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
   
  }

  componentWillMount() {
    this.getCsvData();
  }

  flowChange(event) {

    this.getCsvData(event);
  }

  fetchCsv() {
    return fetch('/data/data.csv').then(function (response) {

      let reader = response.body.getReader();
      let decoder = new TextDecoder('utf-8');

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  }

  getData(result) {

    this.setState({ data: result.data });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();
    let results = Papa.parse(csvData, { header: true })
    this.getData(results)

  }


  render() {
    return (
      <React.Fragment>
        <DataTable headers={[
          {
            header: 'Header 1',
            key: 'Header 1'
          },
          {
            header: 'Header 2',
            key: 'Header 2'
          },
          {
            header: 'Header 3',
            key: 'Header 3'
          },
          {
            header: 'Header 4',
            key: 'Header 4'
          },
          {
            header: 'Header 5',
            key: 'Header 5'
          }
        ]}
          rows={this.state.data}
          overflowMenuOnHover></DataTable>
      </React.Fragment>
    );
  }
}

export default withRouter(DataController);