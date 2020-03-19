import React, {Component} from 'react';
import logo from '../logo.png'


class Header extends Component {
   
        render(){
        return(
            <div className="divHeader">
                <header>
                    <img src={logo}  alt="logo" />
                </header>
            </div>
        )
    }
}


// const Header = () => {
//     return (
//         <div>
//             <head>
//             <img src={ logo.png } alt="logotipo"/>
               
//             </head>
//         </div>
//     );
// }

export default Header;