import React from "react";

import './To-do-list.scss';

const styles = {
  with: '100%',
  textAlign: 'center'
}

const Loader = () => (
  <div style={styles}>
    <div className="lds-dual-ring"></div> 
  </div>
)

export default Loader;