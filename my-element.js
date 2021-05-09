/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

import './app-table.js';
import './app-menu.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    // return css`
    //   :host {
    //     display: block;
    //     border: solid 1px gray;
    //     padding: 16px;
    //   }
    // `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},

      /**
       * The array to store table entries
       */
      data: {type: Array}
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
    this.data = [
      {id:1 , well: 'A1', library:'MC03', previousPlate:'', previousCoordinate:'', feature:'', nrxId:'NRX-0252942', barcode:'NUR900149', target:'ABC', group:'',validation:{eip:'s',hp:'dsss',val:9}},
      {id:2 , well: 'A2', library:'MC03', previousPlate:'', previousCoordinate:'', feature:'', nrxId:'NRX-0252942', barcode:'NUR900149', target:'ABC', group:'',validation:{eip:'s',hp:'dsss',val:9}},
      {id:3 , well: 'A4', library:'MC03', previousPlate:'', previousCoordinate:'', feature:'', nrxId:'NRX-0252942', barcode:'NUR900149', target:'ABC', group:'',validation:{eip:'s',hp:'dsss',val:9}}
    ]
  }

  render() {
    return html`
      <app-table .data="${this.data}"></app-table>
    
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('my-element', MyElement);
