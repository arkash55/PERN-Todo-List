


export default function Button(props) {
    return (
        <input
            type="button"
            value={props.type}
            className="table_button"
            onClick={() => props.didClick(props.id)} 
        />
    )
}