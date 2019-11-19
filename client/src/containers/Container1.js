import React, { Component } from 'react';

import { connect } from 'react-redux'; // this is for function at the bottom

class Container1 extends Component {
  render() {
    return (
      <div>
        <button onClick={}> Get State </button>
        <button onClick={}> Dispatch Action 2 </button>
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

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {}

// export default Container1;
export default connect(mapStateToProps, mapDispatchToProps)(Container1);
