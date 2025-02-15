import PropTypes from "prop-types"
import {Check, Trash2, X} from 'lucide-react'

const TodoItem = ({id, text, isComplete, onToggleComplete, onDelete}) => {
  return (
    <div className="flex p-3 justify-between items-center bg-white rounded-md shadow">
      <p className={isComplete ? 'line-through' : ''}>{text}</p>
      <div className="flex gap-2">
        <button className="py-2.5 px-3 hover:bg-gray-100 rounded-md" onClick={() => onToggleComplete(id)}>
          { isComplete ? <X size={16} color="red"/> : <Check size={16} color="green"/>}
        </button>
        <button className="py-2.5 px-3 hover:bg-gray-100 rounded-md" onClick={() => onDelete(id)}>
          <Trash2 size={16} color="red"/>
        </button>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem
