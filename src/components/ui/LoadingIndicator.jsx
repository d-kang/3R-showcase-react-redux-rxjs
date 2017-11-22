/**
 * @Author: wiz
 * @Date:   11.13.2017 04:34pm
 * @Filename: LoadingIndicator.jsx
 * @Last modified by:   wiz
 * @Last modified time: 11.13.2017 04:57pm
 */

import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import MuiContainer from './MuiContainer';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const loading = (
  <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={style.refresh}
    />
    {/* <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    /> */}
  </div>
)

const LoadingIndicator = () => (
  <MuiContainer
    comp={loading}
  />
);

export default LoadingIndicator;
