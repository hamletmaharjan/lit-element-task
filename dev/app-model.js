import {LitElement, html, css} from 'lit';

import '@polymer/paper-dialog';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

/**
 * `<app-model>` Custom component to list all the todos item
 *
 * <body>
 *  <app-model></app-model>
 *
 * @polymer
 * @litElement
 * @customElement
 */
class AppModel extends LitElement {
    /**
     * Static getter styles
     * 
     * @returns {styles}
     */
    static get styles() {
        return css`
            #dialog {
                width: 40%;
                padding: 15px;
            }
            .header {
                margin: 0;
                padding: 5px;
            }
            .header h2{
                float:left;
                
            }
            .close {
                float:right;
                border:none;
            }
            .header {
                overflow:hidden;
            }
            .half-input-container {
                overflow:hidden;
            }
            .divide {
                width: 45%;
                margin: 10px;
                float: left;
            }
            .full-input {
                margin: 10px;
            }
            .dotted {
                border-style: dotted;
            }
            .accept {
                background-color:#f533c1;
                color: white;
            }
            .bottom {
                margin:0;
                padding: 5px;
            }
            .close:hover {
                cursor: pointer;
            }
            .paper-input-container {
                background-color: red;
            }

            .custom {
                color:red;
            }
            .unfocused-line{
                border-style:dotted;
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
             * Holds the name field.
             *
             * @type {{name: String}}
             */
            name: {type:String},

            /**
             * Holds the legands promoted field.
             *
             * @type {{legand: Number}}
             */
            legand: {type: Number},

            /**
             * Holds the description field.
             *
             * @type {{description: String}}
             */
            description: {type: String},

            /**
             * Holds the name total legands in binding group.
             *
             * @type {{total: Number}}
             */
            total: {type: Number},

            /**
             * Holds the comment field.
             *
             * @type {{comment: String}}
             */
            comment: {type: String}
        }
    }

    /**
     * constructor
     */
    constructor() {
        super();

        this.name = '';
        this.legand = 0;
        this.description = '';
        this.total = 0;
        this.comment = '';
    }

    /**
     * Toggles the model box on button click
     * 
     * @param  {Object} e
     */
    toggleDialog(e) {
        this.shadowRoot.querySelector('#dialog').toggle();
    }

    /**
     * Handles when cancel button is clicked
     */
    handleCancel() {
        [this.name, this.legand, this.description, this.total, this.comment] = ['', 0, '', 0, ''];
    }

    /**
     * Handles when Create button is clicked
     * @param  {Object} e
     */
    handleConfirm(e) {
        let validated = false;
        validated = this.shadowRoot.querySelector('#name').validate();
        if(validated){
            let myObj = {
                name: this.name, 
                legandsPromoted: this.legand, 
                description: this.description,
                totalLegandsInBindingGroup: this.total,
                comment: this.comment
            }
            console.log(myObj);
        }
    }
    /**
     * When input field is changes
     * @param  {Object} event
     */
    handleChange(event) {
		let name = event.target.name;
        let val = event.target.value;
        this[name] = val;
	}
    
    /**
     * render method
     * 
     * @returns {customElements}
     */
    render() {
        return html`
            <paper-button class="pink" raised @click="${this.toggleDialog}">plain dialog</paper-button>
            <paper-dialog id="dialog">
                <div class="header">
                    <h2>Create Binding Group</h2> <iron-icon icon="clear" class="close" dialog-dismiss>x</iron-icon>
                </div>
                <paper-dialog-scrollable>
                <div class="model-body">
                    <div class="half-input-container">
                        <div class="divide">
                            <paper-input always-float-label 
                                label="Name*" 
                                id="name"
                                type="text"
                                name="name"
                                auto-validate error-message="name is required"
                                .value="${this.name}"
                                @input=${this.handleChange}
                                required></paper-input>
                        </div>
                        <div class="divide">
                            <paper-input always-float-label 
                                label="Legands Promoted*" 
                                type="number"
                                name="legand"
                                class="custom"
                                .value="${this.legand}"
                                @input=${this.handleChange}
                                required></paper-input>
                        </div>
                        <div class="divide">
                            <paper-input always-float-label 
                                label="Description"
                                type="text"
                                name="description"
                                .value="${this.description}"
                                @input=${this.handleChange}
                                ></paper-input>
                        </div>
                        <div class="divide">
                            <paper-input always-float-label 
                                label="Total Legands in Binding Group*"
                                type="number"
                                name="total"
                                .value="${this.total}"
                                @input=${this.handleChange}
                                required></paper-input>
                        </div>
                    </div>
                    <div class="full-input">
                        <paper-input always-float-label 
                            label="Comments"
                            type="text"
                            name="comment"
                            .value="${this.comment}"
                            @input=${this.handleChange}
                            ></paper-input>
                    </div>
                </div>
                </paper-dialog-scrollable>
                <div class="bottom">
                    <paper-button class="accept" raised autofocus @click="${this.handleConfirm}">Create</paper-button>
                    <paper-button dialog-dismiss @click="${this.handleCancel}">Cancel</paper-button>
                
                </div>
            </paper-dialog>
        `;
    }

    
}


window.customElements.define('app-model', AppModel);