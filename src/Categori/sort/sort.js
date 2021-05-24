import React,{Component} from 'react'
import classes from './sort.css'

function Sort() {
    const [viseblePop,setviseblePop]=React.useState(false);

    const sortRef= React.useRef();


    const hendelOtsideclik=(e)=>{
        if (!e.path.includes(sortRef.current)){
            setviseblePop(false)
        }
    }

    React.useEffect(()=>{
        document.body.addEventListener('click',hendelOtsideclik)


    },[viseblePop])

    return(
        <div ref={(elem)=>{sortRef.current=elem}} className='sort'>
            <b>Сортировка по:</b>
            <span onClick={()=> setviseblePop(!viseblePop)}>популярность</span>


            {viseblePop && <div>
              <ul>
                  <li className={classes.sortActiv}>Популярность</li>
                  <li>цена</li>
                  <li>Алфовит</li>
              </ul>
            </div>}

        </div>

    )
}


export default Sort