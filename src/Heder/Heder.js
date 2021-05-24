import React,{Component} from 'react'
import classes from './Heder.css'
import Fidele from '../img/Fidele.jpeg'
import Button from '../Botton/Button'
import classNames from 'classnames'
import NAvbar from '../Categori/Categori'


class Heder extends Component{
    menuItems =[
        {id:1 ,name:'piza'},
        {id:2 ,name:'rolu'},
        {id:3 ,name:'wok'},
        {id:4 ,name:'grill'},
        {id:5 ,name:'sup'}
    ]
    render(){
        return(
            <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-2">
                    <img src={Fidele} className="img-fluid"/>
                </div>
                    <div className='col-lg-3' >
                        <a>+79787415033</a>
                    </div>
                <div className='col-lg-5'>
                    <Button outline>dose it work</Button>
                </div>

                </div>
                <NAvbar>{this.menuItems}</NAvbar>
            </div>
        )
    }
}

export default Heder