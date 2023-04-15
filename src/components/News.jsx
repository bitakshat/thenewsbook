import React from 'react'
import Newsitem from './Newsitem'
import basicNews from "../basicNews.json"

export default function News() {
    return (
        <div className="container align-items-center justify-content-center">
            <div className="row">
                {
                    basicNews.map((element) => {
                        return <div className="col-md-4 my-3" key={element.id}>
                            <Newsitem logo={element.logo} institute={element.institute} image={element.image} title={element.title} description={element.description} landmark={element.landmark} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
