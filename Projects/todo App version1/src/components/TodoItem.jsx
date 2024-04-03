import propTypes from "prop-types";

// import TodoItems from "./TodoItems"

const onDelete = (id) => {
  const newData = data.filter(item => item.id !== id);
  setData(newData);
};
function TodoItem(todo) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todo.name}</div>
        <div className="col-4">{todo.date}</div>
        <div className="col-2">
          <button   className="btn btn-danger"
          onClick={() => onDelete(data.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: propTypes.shape({
    name: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
  }).isRequired,
};

// TodoItem.this.props.
export default TodoItem;
