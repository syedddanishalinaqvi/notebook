import {useEffect, useState } from "react";
import Context from "./Context";

const NoteContext=(props)=>{
    const host='https://notebook-backend-2qmz.vercel.app'
    const[data,setData]=useState([]);
    const token=localStorage.getItem('token');
        // Default options are marked with *
        useEffect(()=>{
        fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token":token
          },
           // body data type must match "Content-Type" header
        }).then(response=>response.json())
        .then(dat=>setData(dat))
    },[token])
    const addNote=async (note)=>{
        //Add API Call
        await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token":token
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({title:note.title,description:note.description}), // body data type must match "Content-Type" header
          });
          
        //State change
        setData(data.concat(note));
    }
    const deleteNote=async (id)=>{
        //Api call
        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token":token
            },
          });
        //static
        const arr=data.filter((item)=>item._id!==id)
        setData(arr);
    }
    const updateNote= async (eid,newNote)=>{
        //Api call
        await fetch(`${host}/api/notes/updatenote/${eid}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token":token
            },
            body: JSON.stringify({title:newNote.etitle,description:newNote.edescription}), 
          });
        //static value
        let notee=data.map((element)=>{
            if(element._id===eid){
                return {...element,title:newNote.etitle,description:newNote.edescription}
            }
            else{
                return element
            }
        })
        setData(notee)
    }
    return(
        <Context.Provider value={{data,addNote,deleteNote,updateNote}}>
            {props.children}
        </Context.Provider>
    )
}
export default NoteContext;