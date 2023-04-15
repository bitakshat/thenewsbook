import React from 'react'


export default function Newsitem(props) {

    const countword = (title) => {
        if (title.length > 0) {
            return title.trim().split(" ").length;
        }
    }

    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    }


    return (
        <div class="card" style={{borderTop:"5px solid black"}}>
            <div className="college_signature d-flex" style={{ marginBottom: "1px", fontSize: "0.8rem" }}>
                <img src={props.logo} alt="..." style={{ height: "0.9rem", margin: "0.18rem 0.18rem 0 0.18rem" }} />
                <b style={{ marginBottom: "0" }}>{props.institute}</b>
            </div>
            <img src={props.image} class="card-img-top" alt="..." style={{ maxHeight: "11rem" }} />
            <div class="card-body">
                <h5 class="card-title">{countword(props.title) < 10 ? props.title : truncate(props.title, 10)}</h5>
                <h6 className='text-secondary'>Read More ...</h6>
                <div className="float-end">
                    <p style={{ marginBottom: "0" }}>~{props.landmark}</p>
                </div>
            </div>
        </div>
    )
}
