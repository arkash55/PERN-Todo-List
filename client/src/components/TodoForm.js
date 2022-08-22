

export default function TodoForm(props) {
    return (
        <form className="todo_form">
            <input type="text" className="form_field" placeholder="Add Todo..." onChange={props.didWrite} value={props.fieldValue}/>
            <input type="submit" className="form_button" value="Add" onClick={props.clickedAdd} />
        </form>
    )
}