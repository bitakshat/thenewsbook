import React from 'react'

export default function Blog(props) {
    console.log(props)
    return (
        <div>
            <div className="container">
                <h3>Blog</h3>
                <div className="container-fluid" style={{ border: "2px solid Black", borderRadius: "7px" }}>
                    <div className="Heading my-3 text-center">
                        <div className="cotainer text-start">
                            <b>{props.Heading}</b> <br />
                            <b>{props.date} {props.time}</b>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrPmcUZVw6s_nKKq4TOB-jnC74rE2qqoe8Q&usqp=CAU" alt="..." style={{ width: "100%", maxHeight: "250px", borderRadius: "7px" }} />
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
