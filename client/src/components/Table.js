
import TableRow from './TableRow';


export default function Table(props) {




    const mapped_data = props.todoData.map((todo) => {
        return <TableRow 
                    key={todo.id}
                    id={todo.id}
                    desc={todo.description}
                    clickedDelete={props.clickedDelete}
                />
    });


    return (
        <table className="data_table">
            <thead>
                <tr>
                    <th className="tr_head">Description</th>
                    <th className="tr_head">Edit</th>
                    <th className="tr_head">Delete</th>
                </tr>
            </thead>
            <tbody className="t_body">
                {mapped_data}
            </tbody>
        </table>
    )
}