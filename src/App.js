import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970187.jpg?t=st=1705329521~exp=1705333121~hmac=314ea12e00d9eecc0c2867e4be0f2b11bbdbfe0fb3814076b343b56ff0813093&w=360';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  const refer=()=>{
    window.open("https://www.github.com/FairozAhmadSheikh/","_blank")
  }

  return (
    <div className='container'>
      <img src={url} className='img' />
      <div className='wrapper'>
        <h1>File Sharing Made Simple</h1>
        <p>Upload Your File and Copy the Link</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
         <p>Copy the Link below and send to Person that wants to Download the File</p>
        <a href={result} target='_blank'>{result}</a> 
        <br/>
        <p>Developed by: <br/><button onClick={refer} className='ninja'>Fairoz</button></p>
      </div>
      
    </div>
  );
}

export default App;
