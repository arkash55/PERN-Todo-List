import {Fragment, useState} from 'react';
import EditTodo from './EditTodo';


export default function Button(props) {

    return (
        <Fragment>
            <input
                type="button"
                value={props.type}
                onClick={() => props.didClick(props.id)} 
                className="table_button"
            />

            {props.type === 'edit' && <EditTodo desc={props.desc} id={props.id}/>}
        </Fragment>
    )
}