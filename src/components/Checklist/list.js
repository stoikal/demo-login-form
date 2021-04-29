import React from 'react';
import PropTypes from 'prop-types';

const padding = {
  padding: 6
}

const List = ({ listData, onRemove }) => {
  const handleRemove = () => {
    console.log('bye', listData.id)
    onRemove(listData.id)
  }

  return (
    <div>
      <div>
        <span style={padding}>{listData.name}</span>
        <span style={padding}>{`complete: ${listData.checklistCompletionStatus.toString()}`}</span>
        <button onClick={handleRemove}>remove</button>
      </div>
      <ul>
        {listData?.items?.map((items) => {
          const { id, name } = items;
          return (
            <li key={id}>{name}</li>
          )
        })}
      </ul>
    </div>
  );
};

List.propTypes = {
};

export default List;
