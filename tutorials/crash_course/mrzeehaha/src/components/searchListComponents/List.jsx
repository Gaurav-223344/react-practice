

import React from "react"

function List(props){
    const listContent = props.list.map(
        (ele) => <li><h4>{ele}</h4></li>
    )

    return (
        <ul>
            {listContent}
        </ul>
    )
}



export default List