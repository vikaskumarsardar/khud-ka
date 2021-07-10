import React from 'react'
import './image.css'
import Firestores from './fireStore'
import {Del} from './useStorage' 
import {realTime} from './firebase'
import { log } from 'loglevel'


export default function Image() {
    const {docs} = Firestores('image')
    const remove = (hi)=>{
        

    }
    
    return (
        <div className="Grid">
            {
            docs?.map((op,i)=>
                (
                    <div className='wrap'  key={op.id}>
                    <div className="imgBx">
                        <img src={op.url}  />
                    </div>
                        <button onClick={()=>{
                            
                            Del(op.id,op.name)
                            }}>Hatao be</button>

                </div>
                )
            )
        }
        </div>
    )
}


// const RealTime = async()=>{
//     const r = realTime.ref().set([{
//         swapan:"naam hai haamra ",
//         kaam:"kuch bhi nahin karte hain",
//         zainab:{
//             kauon:["meri-hai","uio"],
//             hai:"nahin hai be"},
//             "lodu":'chomu'
//     }])

    
    // const y =await realTime.ref('/0/zainab/hai').get()
    // const res = y.toJSON()

    // console.log(res);

// realTime.ref('/0/zainab/hai').set(`${res} chhutiya hai rohan tu Shukla`).then((rt)=>console.log("all set")).catch((er)=>console.log("soory babu"))

    // console.log(r);
    // const rt =await realTime.ref('/0/zainab/hai').get()

    // const res1 = rt.toJSON()


    // console.log(res1);
    
    // realTime.ref().set('')
    
    // return{}
// }

// export {RealTime}

// RealTime();