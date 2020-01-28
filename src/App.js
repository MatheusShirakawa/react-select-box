import React , {Component} from 'react';
import SelectBox from './features/select-box/index';

class App extends Component {
  render(){
    return (
      <>
      <h1>Custom select box using reactjs</h1>
      <div style={{margin:'16px', position:'relative'}}>
          <SelectBox
            items={[
                {value:'United states', id:'1'},
                {value:'Brazil', id:'2'},
                {value:'States', id:'3'},
            ]}
              />

      </div>
      </>
    )
  }
}

export default App;
