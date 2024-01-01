import { useState } from 'react';
import '../css/Card.css'
export default function Card({ element, deleteCard, updateCard, onChangeHandle, note, handleUpdate }) {
    const { _id, title, description } = element;
    const { eid, etitle, edescription } = note;
    const [modalDisplay,setModalDisplay]=useState('none');
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body" >
                    <p className="card-title"><b>{title}</b></p>
                    <p className="card-text">{description}</p>
                    </div>
                    <div className="card-button">
                    <button onClick={(e) => { deleteCard(e, _id) }} >Delete</button>
                    <button onClick={(e) => {setModalDisplay(' '); updateCard(e, element)}} >Update Note</button>
                    </div>
            </div>
                    {/* Model */}
                    <div style={{display:modalDisplay}} className="modal">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="modal-title">
                                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="text" className="form-control" onChange={onChangeHandle} name="etitle" value={etitle} id="exampleFormControlInput1" placeholder="Title" />
                                </div>
                                <div className="modal-description">
                                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                    <textarea className="form-control" onChange={onChangeHandle} name="edescription" value={edescription} id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="modal-buttons">
                                <button  type="button" onClick={(e)=>{setModalDisplay('none')}}>Close</button>
                                <button  onClick={(e) => {handleUpdate(e, eid, note);setModalDisplay('none');}} type="button" className="modal-save">Save changes</button>
                            </div>
                        </div>
                    </div>
                    </>
                )
}