import React, { useState } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const UploadBook = () => {

    const [title, setTitle] = useState('');
    const [file,setFile] = useState(null);
    const [des,setDes] = useState('');
    const [url,setUrl] = useState('');
    const [isDown,setIdDown] = useState(0)
    const [book,setBook] = useState('');
    const [thum,setThum] = useState('');

    const onInputChange = (e) => {
        setFile(e.target.files[0])
    }


    const upload = () => {
        const data = new FormData();
        data.append('file',file,file.name);
        data.append('thumbnail',thum)
        data.append('title',title);
        data.append('description',des);
        data.append('link',url);
        data.append('isDownloadable',isDown);
        data.append('bookType',book);


        axios.post("http://109.106.255.239:8000/api/book", data)
          .then(res => {
            toast.success("New Note Created 😎 Hurrehh! ")
          }).catch(err => console.log('err:yE',err));
      }


  return (
    <div className='container'>
        <br/><br/><br/>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type={'text'} placeholder='title...' /><br/><br/>
        <input onChange={(e)=>setThum(e.target.value)} type={'url for Thumbnail'}  placeholder='URL...'/><br/><br/>
        pdf:<input type={'file'} onChange={onInputChange} /><br/><br/>
        <textarea onChange={(e)=>setDes(e.target.value)} placeholder='description' rows={'5'} cols={'60'} /><br/><br/>
        <input onChange={(e)=>setUrl(e.target.value)} type={'url'}  placeholder='Affliate URL...'/><br/><br/>
        <select onChange={(e) => { setIdDown(e.target.value) }}>
            <option value={0}>Select Option</option>
            <option value={1}>True</option>
            <option value={0}>False</option>
        </select><br/><br/>
        <select onChange={(e) => { setBook(e.target.value) }}>
            <option value={'0'}>Select Book</option>
            <option value={'BCA'}>BCA</option>
            <option value={'Programing'}>Programing</option>
            <option value={'Self Help'}>Self Help</option>
            <option value={'Ethical Hacking'}>Ethical Hacking</option>
            <option value={'Free Book'}>Free Book</option>
        </select>
        <button onClick={upload}>Upload Book</button>
   <ToastContainer />
    </div>
  )
}

export default UploadBook