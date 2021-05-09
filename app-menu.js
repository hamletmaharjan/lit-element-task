import {LitElement, html, css, nothing} from 'lit';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import { styleMap } from 'lit/directives/style-map';

class AppMenu extends LitElement {

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
            }
            
        `;
    }

    static get properties() {
        return {
            id: {type: Number},
            hidden: {type: Boolean},
            onEdit: {type: Function},
            onDelete: {type: Function},
            positions: {type: Object}
        }
    }

    constructor() {
        super();
        this.id=0;
        this.hidden = true;
        this.positions = {top:'10px', left: '10px'};
    }

    render() {
        console.log('render');
        return this.hidden? nothing: html`
            <paper-listbox class="list" style=${styleMap(this.positions)}>
                <paper-item @click="${() => this.onEdit(this.id)}">edit</paper-item>
                <paper-item @click="${() => this.onDelete(this.id)}">delete</paper-item>
            </paper-listbox>
        `;
    }
}


window.customElements.define('app-menu', AppMenu);