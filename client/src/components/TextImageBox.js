import React from 'react'
import fitty from 'fitty'

export default class TextImageBox extends React.Component  {
    componentDidMount() {
        fitty('.TextImageBox', {
            minSize: 12,
            maxSize: 300
        })
    }
    render() {
        return (
            <article className="TextImageBox">
                <h2>You Rock! lafsdj;ldf sa;ldkafj ;lkjadfs ;lkj as;lkjdfas lkj;lkjadsda sada
                    adf s;adl kjadls;kj l;askjd;lfaksj l;kadfsj ;lkjdsaf ;lkjsdl;afj l;kafj sl;kjdas fl;kjadsl ;kjasdf
                    adsflj;kljdfsa l;kjfasd lkjadfs ;lkjsad 
                </h2>
            </article>
        )
    }
}
