export default function Navbar(props) {
    const todo_count = props.count ? props.count : 0
    let text;
    if (props.count === 0) {
        text = 'You have nothing to do...'
    } else if (props.count === 1) {
        text = 'You have 1 thing to do...'
    } else {
        text = `You have ${props.count} things to do...`
    }

    return (
        <nav className="navbar">
            <h1 className="title">Todo List</h1>
            <h2 className="todo_count">{text}</h2>
        </nav>
    )
}