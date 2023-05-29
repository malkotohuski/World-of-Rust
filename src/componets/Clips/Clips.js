import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import './Clips.css';

const Clips = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadedUrls, setUploadedUrls] = useState([]);
    const [urlInput, setUrlInput] = useState('');
  
    const handleDrop = async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
  
      try {
        const response = await axios.post('https://your-upload-api-endpoint', formData);
        const { url } = response.data;
  
        setUploadedFiles((prevFiles) => [...prevFiles, url]);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleUrlUpload = () => {
      const url = urlInput.trim();
  
      if (url !== '') {
        setUploadedUrls((prevUrls) => [...prevUrls, url]);
        setUrlInput('');
      }
    };
  
    return (
      <div className="container">
        <h1>Video and URL Upload</h1>
        <Dropzone onDrop={handleDrop} accept="video/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag and drop a video file here, or click to select a file</p>
            </div>
          )}
        </Dropzone>
        <div>
          <input
            type="text"
            placeholder="Enter a URL link"
            value={urlInput}
            onChange={(event) => setUrlInput(event.target.value)}
          />
          <button onClick={handleUrlUpload}>Upload URL</button>
        </div>
        {uploadedFiles.length > 0 && (
          <div>
            <h2>Uploaded Videos:</h2>
            <table>
              <thead>
                <tr>
                  <th>Video Number</th>
                  <th>Video URL</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((fileUrl, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                        Video {index + 1}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {uploadedUrls.length > 0 && (
          <div>
            <h2>Uploaded URLs:</h2>
            <table>
              <thead>
                <tr>
                  <th>URL Number</th>
                  <th>URL Link</th>
                </tr>
              </thead>
              <tbody>
                {uploadedUrls.map((url, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Link {index + 1}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

export default Clips;
