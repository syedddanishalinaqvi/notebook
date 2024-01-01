import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import Context from './Context/Context';
import '../css/Home.css'
import { useUserContext } from './Context/UserContext';

const Home = () => {
    const context = useContext(Context);
    const {setLogin}=useUserContext();
    const { data, addNote, deleteNote, updateNote } = context;
    const [note, setNote] = useState({ eid: "", etitle: "", edescription: "" })

    useEffect(()=>{
        
    },[data])
    const handleSubmit = () => {
        addNote(note);
    }
    const deleteCard = (e, _id) => {
        e.preventDefault()
        deleteNote(_id)
    }
    const updateCard = (e, currentNote) => {
        setNote({ eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description });
        updateNote(note);
    }
    const handleUpdate = (e, eid, newNote) => {
        e.preventDefault();
        updateNote(eid, newNote)
    }
    const OnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="home">
            <div className="home-content">
                <div className="add-note">
                <button onClick={()=>{setLogin(false);}} >Log Out</button>
                </div>
                <div className="title">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" name="title" onChange={OnChange} id="exampleFormControlInput1" placeholder="Title" />
                </div>
                <div className="description">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" name="description" onChange={OnChange} id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                </div>

                <div className="add-note">
                    <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>Add Note</button>
                </div>
            </div>
            <div className="notes">
            <div className="labels">
                YOUR ALL NOTES
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }} className="">
                {
                    data.map((element) => {
                        return <div style={{ margin: "10px" }} key={element._id}><Card element={element} deleteCard={deleteCard} updateCard={updateCard} handleUpdate={handleUpdate} onChangeHandle={OnChange} note={note} /></div>

                    })
                }
            </div>
            </div>
        </div>

    )
}

export default Home
