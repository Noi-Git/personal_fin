import React, { Component } from 'react';

import { connect } from 'react-redux'; // this is for function at the bottom -- connect react with redux

class Container1 extends Component {
  render() {
    return (
      <div>
        <button onClick={console.log(this.props.stateprop1)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
      </div>
    );
  }
}

// setup mapStateToProps(state) -- it takes state as paramiter
// setup mapDispatchToProps(dispatch) -- it takes Dispatch as paramiter
/* these are reserve name 
	-- they descript what these functions do and 
	-- allow us to use redux state with Redux
after finish setup the functions to back to the top and import them
*/

function mapStateToProps(state) {
  return {
    stateprop1: state.stateprop1
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE)
  };
}

// export default Container1;
export default connect(mapStateToProps, mapDispatchToProps)(Container1);
