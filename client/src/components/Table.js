import TableRow from './TableRow';
import EditTodo from './EditTodo';

export default function Table(props) {


    const mapped_rows = props.todoData.map((todo) => {
        return <TableRow 
                    key={todo.id}
                    id={todo.id}
                    desc={todo.description}
                    clickedDelete={props.clickedDelete}
                    clickedSave={props.clickedSave}
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
                {mapped_rows}
            </tbody>
        </table>
    )
}