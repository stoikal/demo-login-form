import React from 'react';
import PropTypes from 'prop-types';
import List from './list'

const Checklists = ({ lists, onRemove, onRemoveItem }) => {
  console.log(lists)
  return (
    <div>
      {lists?.map((singleList) => {
        const { id } = singleList
        return (
          <List 
            key={id}
            listData={singleList}
            onRemove={onRemove}
            onRemoveItem={onRemoveItem}
          />
        )
      })}
    </div>
  );
};

Checklists.propTypes = {
};

export default Checklists;
