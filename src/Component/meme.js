import React from 'react'
import { useEffect, useState } from 'react'
import './app.css'
import Memecard from './memecard'
import Templates from './Templates'


export const Meme = () => {
    const [template, setTemplate] = useState([])
    const [meme, setmeme]=useState(null)

    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then((data) => {
                setTemplate(data.data.memes)
                console.log(data.data.memes)
            })
    },[])

   
    return (
        <div className="App">
            <h1>Meme generator</h1>
            {meme === null ? <Templates template={template} setmeme={setmeme} /> : <Memecard meme={meme} setmeme={setmeme}/>}
            
        </div>  
    )
}

export default Meme
