import Button from './Button';
import EditTodo from './EditTodo';


export default function TableRow(props) {
    return (    
        <tr className="tr">
            <td className="table_desc" >{props.desc ? props.desc : 'No description available'}</td>
            <td><EditTodo desc={props.desc}  clickedSave={props.clickedSave} id={props.id}/></td>
            <td><Button key={`edit button ${props.id}`} type="delete"didClick={props.clickedDelete} id={props.id}/></td>
        </tr>
    )
}




