import React from 'react'
import { useState } from 'react'

export const Memecard = ({ meme, setmeme }) => {
    const [form, setform] = useState({
        template_id: meme.id,
        username: "AdarshB"   ,
        password: "K7dVQfYuDm3Rv!F",
        boxes: []
    })
    const generatememe = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box, index) => {
            url +=`&boxes[${index}][text]=${box.text}`
        })
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setmeme({...meme, url: data.data.url})
            })
    }

    return (
        <div className="meme">
            <img src={meme.url} alt="" />
            <div>
            {
                [...Array(meme.box_count)].map((c, index) => (
                    <input
                        type="text"
                        placeholder={`Meme caption ${index + 1}`}
                        key={index}
                        onChange={(e) =>{
                            const newboxes = form.boxes
                            newboxes[index] = { text: e.target.value }
                            setform({ ...form, boxes: newboxes })
                        
                        }}
                    
                    />
                ))
            }
            </div>
            <div>
                <button onClick={generatememe}>Generate Meme</button>
                <button onClick={()=>setmeme(null)}>Choose Template</button>
            </div>
            
        </div>
    )
}

export default Memecard
