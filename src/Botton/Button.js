import React,{Component} from 'react'
import classes from './Button.css'

class Button extends Component{
    clikPocnopke=()=>{
        alert('hellow ')
    }
    render() {
        return(
            <button onClick={this.clikPocnopke} className="btn-warning" style={{borderRadius:'10px'}}

            >{this.props.children}</button>
        )
    }
}

export default Button