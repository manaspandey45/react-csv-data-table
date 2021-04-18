import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './csv-data-table/main-layout' 
import '@carbon/ibm-security/css/index.min.css';


class App extends Component {
 render(){
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" component={MainLayout} exact/>

       </Switch>
  </BrowserRouter>
  );
}
}

export default App;
