import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
import Api from '../../api';
import Checklists from '../Checklist';

const Home = () => {
  const [checklists, setChecklists] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    if (!user.token) return;

    fetchList()
  }, [])

  const fetchList = async () => {
    const api = new Api({ token: user.token });
    const res = await api.checklist.list();

    if (res.status === 200) {
      setChecklists(res.data.data)
    }
  }

  const handleRemove = async (listId) => {
    console.log('handleRemove')
    const api = new Api({ token: user.token });

    const res = await api.checklist.remove(listId);
    console.log('handleRemove2')
    if (res.status === 200) {
      fetchList()
    }
  }

  return (
    <div>
      <Checklists 
        lists={checklists}
        onRemove={handleRemove}
      />
    </div>
  );
};

Home.propTypes = {
};

export default Home;
