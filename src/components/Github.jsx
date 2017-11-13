/**
 * @Date:   11.12.2017
 * @Filename: SimpleAjaxRx.jsx
 * @Last modified time: 11.13.2017 02:15pm
 */

import React, { Component } from 'react';
import Rx from 'rx-dom';
class SimpleAjaxRx extends Component {

  componentDidMount() {
    console.log('Rx.DOM', Rx.DOM);
    Rx.DOM.ajax('https://api.github.com/users/d-kang')
      .subscribe((xhr) => {
        console.log('xhr', xhr);
        const products = JSON.parse(xhr.response);
        console.log('products', products);
      })
  }
  render() {
    return (
      <div>
        <div>Hi Github!</div>
        <img src="https://developer.github.com/assets/images/electrocat.png" alt=""/>
      </div>
    );
  }

}

export default SimpleAjaxRx;
