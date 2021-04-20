import React, { useState } from 'react';
import ProgressBar from './ProgressBar.js';

const UploadForm = () =>{
const [file,setFile]=useState(null);
const [error,setError]=useState(null);
const type=['image/jpeg','image/png','image/jpg'];   
const changeHandler =(e) =>{
let selected=e.target.files[0];
if(selected && type.includes(selected.type))
       { setFile(selected);
    setError('');
    }
        else{
            setFile(null);
            setError('please select a valid file type png/jpeg ');

        }
    }

    return (
    <form>
        <input type="file" onChange={changeHandler}/>
        <div className="output">
            {error &&<div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && < ProgressBar file = {file} setFile ={setFile}/>}
            </div>
    </form>
)

}
export default UploadForm;