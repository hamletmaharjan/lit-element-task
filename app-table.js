import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column-group';
import '@vaadin/vaadin-button';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import { LitElement, html, css, render } from 'lit-element';

import './app-menu';

class AppTable extends LitElement {

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
    static get properties() {
        return {
            data: {type: Array},
            onKebabMenuClick: {type: Function}
        }
    }

    constructor() {
        super();
        this.indexRenderer = this.indexRenderer.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        console.log(this.data);
        return html`
            <div>hello</div>
            
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

    indexRenderer(root, column, rowData) {
        // console.log(rowData);
        // <iron-icon icon="more-vert" @click="${(e)=>this.handleKebabMenuClick(e, rowData)}"></iron-icon>
        const innerHTML = html`
        <iron-icon icon="more-vert" @click="${(e)=>this.onKebabMenuClick(e, rowData)}"></iron-icon>
        
        `;
        render( innerHTML, root);
        // root.textContent = '4dot';   
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
        // console.log(rowData);
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

    // handleKebabMenuClick(e, rowData) {
    //     let menu = this.shadowRoot.querySelector('app-menu');
    //     const positions = {left:e.clientX+10 + 'px', top: e.clientY+'px'};
    //     menu.positions = {...positions};
    //     menu.style.backgroundColor = 'red';
    //     menu.id = rowData.item.id;
    //     menu.hidden = false;
    // }

    

}

window.customElements.define('app-table', AppTable);