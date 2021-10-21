import React from 'react'

function HeaderImage(props) {
    return (
        <div style={{backgroundImage:'url(./Background.png)',maxHeight:'100vh',padding:'0px 100px',border:'2px solid red',marginBottom:'30px'}}>
            {props.children}
        </div>
    )
}

export default HeaderImage
