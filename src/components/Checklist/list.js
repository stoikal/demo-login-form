import React from 'react';
import PropTypes from 'prop-types';

const List = ({ listData }) => {
  return (
    <div>
      {listData.name}
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
