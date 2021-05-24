import React,{Component} from 'react'
import classes from './Categori.css'
import ButtonCatalog from './bottonForCatalog/bottonForCatalog'
import Sort from '../Categori/sort/sort'



class Categori  extends Component{
    render() {
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ButtonCatalog>{this.props.children}</ButtonCatalog>
                <Sort/>
            </nav>
       )
   }

}
export default Categori
