import Button from './Button';

export default function TableRow(props) {
    return (    
        <tr>
            <td className="table_desc" >{props.desc ? props.desc : 'No description available'}</td>
            <td className="t_button" ><Button type="edit" /></td>
            <td className="t_button"><Button type="delete" didClick={props.clickedDelete} id={props.id}/></td>
        </tr>
    )
}