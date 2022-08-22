export default function Navbar(props) {
    const todo_count = props.count ? props.count : 1;
    return (
        <nav className="navbar">
            <h1 className="title">Todo List</h1>
            <h2 className="todo_count">You have {todo_count} {todo_count>1 ? 'things' : 'thing'} to do...</h2>
        </nav>
    )

}