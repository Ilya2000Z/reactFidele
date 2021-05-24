import React,{Component}from 'react'
import classes from './bottonForCatalog.css'

class ButtonCatalog extends Component{
    render() {
        const buttonList = this.props.children.map((button,index) =>
            <button onClick={()=>console.log(button.name)}
                    style={{marginLeft:'20px'}}
                    className='btn btn-light'
                    key={`${button}_${index}`}>
                {button.name}</button>
        );
                return (
                    <div>
                  <li>{buttonList}</li>
                    </div>

                )
    }
}
export default ButtonCatalog