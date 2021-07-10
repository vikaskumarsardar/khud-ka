import React, { useState,useEffect } from 'react'
import {projectStorage,projectFirestore,timestamp} from './firebase'


export default function useStorage(file) {
    const [progress,setProgress]=useState(0);
    const [error,setError]=useState(null);
    const [url,setUrl]=useState(null);

    
    
    
    useEffect(() => {
        const storageRef=projectStorage.ref(file.name)
        const collectionRef=projectFirestore.collection('image')
        let name = true;
        if(name){
            
            storageRef.put(file).on('state_changed',(snap)=>{
                let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
                setProgress(percentage);
                
            },(err)=>{
                setError(err);
            },async()=>{
                const url=await storageRef.getDownloadURL();
                const name = file.name;
                const createdAt=timestamp();
                collectionRef.add({url,createdAt,name})
                setUrl(url);
            })
        }
        
        return () => {
         name = false;   
        }
    }, [file])
    
    return  {progress,url,error}      
}



const Del = (ins,name)=>{
    const reference = projectFirestore.collection('image').doc(ins).delete().then((res)=>
    console.log("delted succefully")).catch(err=>console.log("error found aomething"))
    projectStorage.ref(name).delete().then((done)=>console.log("storage deleted")).catch(()=>console.log("storage not delted"))
console.log("here was ");
}
export {Del};     
    
