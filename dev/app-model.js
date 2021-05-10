import {LitElement, html, css} from 'lit';
import '@polymer/paper-dialog';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';


class AppModel extends LitElement {
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
            --paper-input-container-input: {
                box-sizing: border-box;
                font-size: inherit;
                padding: 4px;
              };
        `;
    }

    static get properties() {
        return {
            name: {type:String},
            legand: {type: Number},
            description: {type: String},
            total: {type: Number},
            comment: {type: String}
        }
    }

    constructor() {
        super();
        this.name = '';
        this.legand = 0;
        this.description = '';
        this.total = 0;
        this.comment = '';
    }
    
    render() {
        console.log('ren');
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

    toggleDialog(e) {
        // console.log( this.shadowRoot);
        this.shadowRoot.querySelector('#dialog').toggle();
       
        // this.$.dialog.toggle();
    }

    handleCancel() {
        [this.name, this.legand, this.description, this.total, this.comment] = ['', 0, '', 0, ''];
        // console.log(this.name, this.legand, this.description);
    }


    handleConfirm(e) {
        // console.log(this.name, this.description, this.legand);
        let myObj = {
            name: this.name, 
            legandsPromoted: this.legand, 
            description: this.description,
            totalLegandsInBindingGroup: this.total,
            comment: this.comment
        }
        console.log(myObj);
    }

    handleChange(event) {
        // console.log(event.target.name);
		let name = event.target.name;
        let val = event.target.value;
        switch(name) {
            case 'name':
                this.name = val;
                break;
            case 'legand':
                this.legand = val;
                break;
            case 'description':
                this.description = val;
                break;
            case 'total':
                this.total = val;
                break;
            case 'comment':
                this.comment = val;
                break;
            default:
                console.log('invalid');
                break;
        }
	}
}


window.customElements.define('app-model', AppModel);