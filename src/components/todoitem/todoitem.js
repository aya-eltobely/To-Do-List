import React , {Component} from "react";
import './todoitem.css';


const TodoItem = (props) =>
{
    const {items , deleteitem} = props;

    let len = items.length;

    const allitems = len>0 ? (

        items.map( item => 
            {
                return(
                    <div key={item.id}>
                        <span className="name" > {item.name} </span>
                        <span className="age" > {item.age} </span>
                        <span className="action" onClick={ () => deleteitem(item.id)} > &times; </span>
                    </div>
                )
            } )

    ) : ( <p> There Is No Items </p> )

    return(
        <div className="listitem">
            <div >
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>

            {allitems}
        </div>
    )
}

export default TodoItem;