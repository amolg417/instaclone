import React, { useCallback, useRef, useState } from 'react'
import '../styles/form.css'
import { SavePost } from '../pages/api-utils'
import { useNavigate } from 'react-router-dom'
import TopNav from './TopNav'
function Postform() {
    let formdata = new FormData()
    let [PostData, SetPostdata] = useState({
        Author: "",
        location: "",
        description: "",
        PostImage: "",
        PostInput: ""
    })
    let fileInputRef = useRef(null)
    let [isButtonDisabled, setButtonDisabled] = useState({ disabled: true, color: "#707070", backgroundColor: "" });
    let Navigate = useNavigate()
    let checkFields = useCallback(() => {
        if (PostData.Author && PostData.PostInput && PostData.description && PostData.location) {
            setButtonDisabled({ disabled: false, color: "#FFFFFF", backgroundColor: "#347DFD" })
        } else {
            setButtonDisabled({ disabled: true, color: "#707070", backgroundColor: "" })
        }
    }, [PostData.Author, PostData.PostInput, PostData.description, PostData.location])

    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            formdata.append("Author", PostData.Author)
            formdata.append("location", PostData.location)
            formdata.append("description", PostData.description)
            formdata.append("file", fileInputRef.current.files[0]);
            await SavePost(formdata);
            Navigate('/post')

        } catch (error) {
            console.log("error", error);
        }
    }
    const FileInputChange = (e) => {
        e.preventDefault();
        fileInputRef.current.click()
        const file = fileInputRef.current.files[0];
        if (file) {
            SetPostdata({ ...PostData, PostInput: file.name });
        }
    };

    return (
        <div>
            <TopNav />
            <section className='form'>
                <form action="#" method='POST' onSubmit={HandleSubmit}>
                    <div >
                        <input ref={fileInputRef} id="files" type="file" style={{ display: "none" }} name="file" onChange={FileInputChange} />
                        <input className='file-input' type="text" value={PostData.PostInput} onChange={(e) => { checkFields() }} placeholder='No file Chosen' />
                        <button onClick={FileInputChange}><label htmlFor='files'>Browse</label></button>
                    </div>
                    <div className='User-name'>
                        <input type="text" placeholder='Author' value={PostData.name} onChange={(e) => { SetPostdata({ ...PostData, Author: e.target.value }); checkFields() }} />
                        <input type="text" placeholder='Location' value={PostData.location} onChange={(e) => { SetPostdata({ ...PostData, location: e.target.value }); checkFields() }} />
                    </div>
                    <div id='description'>
                        <input type="text" placeholder='Description' onChange={(e) => { SetPostdata({ ...PostData, description: e.target.value }); checkFields() }} />
                    </div>
                    <div id='form-footer'>
                        <button type="submit" disabled={isButtonDisabled.disabled} style={{ backgroundColor: isButtonDisabled.backgroundColor, color: isButtonDisabled.color }}  >Post</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Postform
