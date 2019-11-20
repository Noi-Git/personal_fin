import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/action';

import { connect } from 'react-redux'; // this is for function at the bottom -- connect react with redux

class Container1 extends Component {
  render() {
    const user_text = 'text 1';
    return (
      <div>
        {/* action1 and action2 come from the two function below */}
        <button onClick={console.log(this.props.stateprop1)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator1()}>
          Dispatch Action Creator 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          Dispatch Action Creator 2
        </button>
        <button onClick={() => this.props.action_creator3(user_text)}>
          Dispatch Action Creator 3
        </button>
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
    // stateprop1: state.stateprop1
    stateprop1: state.user_text
  };
}

// CREATE BUTTONS
function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_createor1: () => dispatch(ACTIONS.success()),
    action_createor2: () => dispatch(ACTIONS.failure()),
    action_createor3: text => dispatch(ACTIONS.user_input(text))
  };
}

// export default Container1;
export default connect(mapStateToProps, mapDispatchToProps)(Container1);
