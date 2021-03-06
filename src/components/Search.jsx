import React from 'react';
import { useDispatch } from 'react-redux';
import { getFilteredDocs } from '../redux/Actions/documentActions';
import {Input} from 'antd'

const { Search } = Input;

function CustomeSearch({ setShowSearch }) {

  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(getFilteredDocs(e.target.value))
    if(e.target.value===""){
        setShowSearch(false);
    }
    else {
        setShowSearch(true);
    }
  };
  const onSearch = value => dispatch(getFilteredDocs(value))

  return (
      <>
      <Search placeholder="Suchwort eingeben..." allowClear onSearch={onSearch} onChange={handleChange} style={{ width: 250, margin: "20px 0" }} />
      </>
  );
}

export default CustomeSearch;