import { LitElement, html, css } from 'lit-element';
import { render } from 'lit-html';

import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-button';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@vaadin/vaadin-grid/vaadin-grid-column-group';

import './app-menu';

/**
 * `<app-table>` Custom component to add a table
 *
 * <my-element>
 *  <app-table></app-table>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class AppTable extends LitElement {

    /**
     * Static getter styles
     * 
     * @returns {styles}
     */
    static get styles() {
        return css`
           
        ul { 
            padding: 0px
         }
         li {
            display: inline-block;
            width: 33%;
            list-style: outside none none;
         }
         --vaadin-grid-header-cell: {
            text-transform: uppercase;
            padding: 16px;
          };
        }
        
        `;
    }

    /**
     * Static getter properties
     * 
     * @returns Object
     */
    static get properties() {
        return {
            /**
             * holds all the table datas passed from parent
             */
            data: {type: Array},

            /**
             * handler function when 3 dot menu is clicked
             */
            onKebabMenuClick: {type: Function}
        }
    }

    /**
     * constructor
     */
    constructor() {
        super();

        this.indexRenderer = this.indexRenderer.bind(this);
    }

    indexRenderer(root, column, rowData) {
        const innerHTML = html`
        <iron-icon icon="more-vert" @click="${(e)=>this.onKebabMenuClick(e, rowData)}"></iron-icon>
        `;
        render( innerHTML, root); 
    }

    validationRenderer(root, column, rowData) {
        const innerHTML = html`
            <div class="validation">
                <div class="top">
                    Validation
                </div>
                <hr>
                <div class="bottom">
                    <ul>
                        <li>equipment id</li>
                        <li>head price</li>
                        <li>validation</li>
                    </ul>
                </div>
            </div>
        `;
        render(innerHTML, root);
    }

    validationBodyRenderer(root, column, rowData) {
        const innerHTML = html`
            <div class="validation-body">
                <ul>
                    <li>${rowData.item.validation.eip}</li>
                    <li>${rowData.item.validation.hp}</li>
                    <li>${rowData.item.validation.val}</li>
                </ul>
            </div>
        `;
        render(innerHTML, root);
    }

    /**
     * render method
     * 
     * @returns {customElements}
     */
    render() {
        return html`
            <vaadin-grid .items="${this.data}" theme="column-borders">
                <vaadin-grid-column width="20px" .renderer="${this.indexRenderer}"></vaadin-grid-column>
                <vaadin-grid-column width="30px" path="well" header="Well"></vaadin-grid-column>
                <vaadin-grid-column width="40px" path="library" header="Library"></vaadin-grid-column>
                <vaadin-grid-column width="30px" path="previousPlate" header="Previous Plate"></vaadin-grid-column>
                <vaadin-grid-column width="30px" path="previousCoordinate" header="Previous Coordinate"></vaadin-grid-column>
                <vaadin-grid-column width="30px" path="feature" header="Feature"></vaadin-grid-column>
                <vaadin-grid-column path="nrxId" header="NRX ID"></vaadin-grid-column>
                <vaadin-grid-column path="barcode" header="2D Barcode"></vaadin-grid-column>
                <vaadin-grid-column width="30px" path="target" header="Target"></vaadin-grid-column>
                <vaadin-grid-column path="group" header="Binding Groups"></vaadin-grid-column>
                <vaadin-grid-column width="140px" .headerRenderer="${this.validationRenderer}" .renderer="${this.validationBodyRenderer}"></vaadin-grid-column>
            </vaadin-grid>
        `;
    }

}

window.customElements.define('app-table', AppTable);