import React from 'react'

export const Templates = ({template,setmeme}) => {
    return (
        <div>
            {
                template.map((templates) => (
                    <div key={templates.id} className="template" onClick={() => {
                        setmeme(templates)
                    }}>
                        <div className="image"
                            style={{backgroundImage:`url(${templates.url})`}}
                        
                        >
                            
                       </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Templates