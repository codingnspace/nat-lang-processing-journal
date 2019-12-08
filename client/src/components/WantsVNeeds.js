import React from 'react'
import List from './List'

export default class WantsVNeeds extends React.Component  {
    render() {
        
        return (
            <article>
                <List categoryOptions={["Need", "Want"]} title="Wants vs. Needs" noCheckmark={true} />
            </article>
        )
    }
}
