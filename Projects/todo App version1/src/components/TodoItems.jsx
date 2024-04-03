import TodoItem from "./TodoItem"
import propTypes from "prop-types"

function TodoItems({items}) {
    return <div className="items container">
        {
            items.map((item, index) => (
                <TodoItem key={index} date={item.date} name={item.name}> </TodoItem>
            ))
        }
    </div>
}
TodoItems.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            name: propTypes.string.isRequired,
            date: propTypes.string.isRequired,
        })
    ).isRequired,
};

export default TodoItems