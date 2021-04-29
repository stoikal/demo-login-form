import React from 'react';
import PropTypes from 'prop-types';
import List from './list'

const Checklists = ({ lists }) => {
  console.log(lists)
  return (
    <div>
      {lists?.map((singleList) => {
        const { id } = singleList
        return (
          <List 
            key={id}
            listData={singleList}
          />
        )
      })}
    </div>
  );
};

Checklists.propTypes = {
};

export default Checklists;
