import {LitElement, html, css} from 'lit';

class KebabMenu extends LitElement {

    static get styles() {
//         return css`
        
// .kebab {
//     cursor: pointer;
//     position: relative;
//     display: inline-block;
//     box-sizing: border-box;
//     padding: 0 16px;
//     top: 12px;
//     figure {
//       width: 6px;
//       height: 6px;
//       border-radius: 5px;
//       background: #00bcd4;
//       margin: 3px 0;
//     }
//   }
  
//   .middle {
//     transition: all 0.25s cubic-bezier(.72,1.2,.71,.72);
//     transform: scale(1);
//     position: relative;
//     box-shadow: 0 0.1px 0.1px 0 rgba(0, 0, 0, 0.16), 0 0.1px 0.3px 0 rgba(0, 0, 0, 0.12);
//     -webkit-filter: blur(.1px);
//     filter: blur(.1px);
//   }
  
//   .middle.active {
//     transform: scale(4.5);
//     transition: all 0.25s cubic-bezier(.32,2.04,.85,.54);
//     box-shadow: 0 0.1px 0.1px 0 rgba(0, 0, 0, 0.16), 0 0.1px 0.3px 0 rgba(0, 0, 0, 0.12);
//   }
  
//   .cross {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) scale(0);
//     margin-top: -1px;
//     font-family: 'Nunito', sans-serif;
//     color: white;
//     transition: all 0.2s cubic-bezier(.72,1.2,.71,.72);
//     font-size: 22px;
//     user-select: none;
//   }
  
//   .cross.active {
//     transform: translate(-50%, -50%) scale(1);
//     transition: all 0.15s cubic-bezier(.32,2.04,.85,.54);
//   }
  
//   // Other styling
  
//   h1, a, li {
//     font-family: 'Nunito', sans-serif;
//   }
  
//   h1 {
//     font-size: 26px;
//     background: #00bcd4;
//     color: white;
//     padding: 40px 0 40px 20%;
//     margin-bottom: 50px;
//   }
  
//   a, li {
//     color: darken(#9e9e9e, 20%);
//     text-decoration: none;
//   }
  
//   .nav {
//     margin-left: 20%;
//     > li {
//       display: inline-block;
//       padding: 1em 18px;
//       cursor: pointer;
//       &:hover {
//         background: lighten(#9e9e9e, 30%);
//       }
//     }
//   }
  
//   .dropdown {
//       position: absolute;
//       right: 0;
//       top: 3em;
//       transition: all 0.25s ease-out;
//       transform: scale(0);
//       transform-origin: 100% 0;
//       box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.12);
//       li {
//         display: block;
//         width: 100%;
//         a {
//           width: 100%;
//           padding: 1em 18px;
//           display: inline-block;
//           white-space: pre;
//           box-sizing: border-box;
//           &:hover {
//             background: lighten(#9e9e9e, 30%);
//           }
//         }
//       }
//     &:hover {
//       ul {
//         transform: scale(1);
//       }
//     }
//   }
  
//   .dropdown.active {
//     transform: scale(1);
//     transition: all 0.25s cubic-bezier(.5,1.8,.9,.8);
//   }
  

  
//   .follow {
//     overflow: hidden;
//     width: 42px;
//     height: 42px;
//     border-radius: 50px;
//     background: #03A9F4;
//     display: block;
//     margin: 300px auto 0;
//     white-space: nowrap;
//     padding: 13px;
//     box-sizing: border-box;
//     color: white;
//     transition: all 0.2s ease;
//     font-family: Roboto, sans-serif;
//     text-decoration: none;
//     box-shadow: 0 5px 6px 0 rgba(0,0,0,0.2);
//     i {
//       margin-right: 20px;
//       transition: margin-right 0.2s ease;
//     }
//     &:hover {
//       width: 134px;
//       i {
//         margin-right: 10px;
//       }
//     }
//   }
//   `;
    }
    render() {
        return html`
            <div class="kebab">
                <figure></figure>
                <figure class="middle"></figure>
                <p class="cross">x</p>
                <figure></figure>
                <ul class="dropdown">
                <li><a href="http://www.g.com">Art</a></li>
                <li><a href="http://www.g.com">Coding</a></li>
                <li><a href="http://www.g.com">Design</a></li>
                <li><a href="http://www.g.com">Web Development</a></li>
                </ul>
            </div>
        `;
    }
}


window.customElements.define('kebab-menu', KebabMenu);