import React from 'react';
import PropTypes from 'prop-types';

const padding = {
  padding: 6
}

const List = ({ listData, onRemove, onRemoveItem }) => {
  const handleRemove = () => {
    console.log('bye', listData.id)
    onRemove(listData.id)
  }

  const handleRemoveItem = (id) => {
    onRemoveItem(id)
  }

  return (
    <div>
      <div style={{fontWeight: 'bold'}}>
        <span style={padding}>{listData.name}</span>
        <span style={padding}>{`complete: ${listData.checklistCompletionStatus.toString()}`}</span>
        <button onClick={handleRemove}>remove</button>
      </div>
      <ul>
        {listData?.items?.map((item) => {
          console.log(item)
          const { id, name, itemCompletionStatus } = item;
          return (
            <li key={id}>
              <div>
                <span>{id}</span>
                <span style={padding}>{name}</span>
                <span style={padding}>{itemCompletionStatus}</span>
                <button onClick={() => handleRemoveItem(id)}>remove item</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

List.propTypes = {
};

export default List;
