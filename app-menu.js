import {LitElement, html, css, nothing} from 'lit';
import { styleMap } from 'lit/directives/style-map';

import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';


/**
 * `<app-menu>` Custom component to add a menu
 *
 * <app-table>
 *  <app-menu></app-menu>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class AppMenu extends LitElement {

    /**
     * Static getter styles
     * 
     * @returns {styles}
     */
    static get styles() {
        return css`
            .list {
                width: 100px;
                position: absolute;
                top: 0px;
                left: 0px;
                z-index:3;
            }

            paper-item:hover {
                cursor:pointer;
                background-color:#bbc1c9;
            }
            
        `;
    }

    static get properties() {
        return {
            /**
             * unique id of the table data
             *
             * @type {{id : Number}}
             */
            id: {type: Number},

            /**
             * Boolean to decide whether to show menu component or not
             *
             * @type {{hidden : Boolean}}
             */
            hidden: {type: Boolean},

            /**
             * Handler function on edit
             *
             * @type {{onEdit : Function}}
             */
            onEdit: {type: Function},

            /**
             * Handler function on delete
             *
             * @type {{onDelete : Function}}
             */
            onDelete: {type: Function},

            /**
             * Object that defines where to position the component with css with left and top value
             *
             * @type {{positions : Object}}
             */
            positions: {type: Object}
        }
    }

    /**
     * Constructor
     */
    constructor() {
        super();

        this.id=0;
        this.hidden = true;
        this.positions = {top:'10px', left: '10px'};
    }

    /**
     * render method
     * 
     * @returns {customElements}
     */
    render() {
        return this.hidden? nothing: html`
            <paper-listbox class="list" style=${styleMap(this.positions)}>
                <paper-item @click="${() => this.onEdit(this.id)}">edit</paper-item>
                <paper-item @click="${() => this.onDelete(this.id)}">delete</paper-item>
            </paper-listbox>
        `;
    }
}


window.customElements.define('app-menu', AppMenu);