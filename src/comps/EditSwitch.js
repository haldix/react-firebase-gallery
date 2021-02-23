import React from 'react';
import Switch from 'react-switch';
import '../styles/EditSwitch.scss';
const EditSwitch = ({ edit, setEdit }) => {
  const handleChange = (nextChecked) => {
    setEdit(nextChecked);
  };

  return (
    <div className='EditSwitch'>
      <label htmlFor='edit-switch'> Edit Mode </label>
      <Switch
        onColor='#f00'
        offColor='#555'
        id='edit-switch'
        onChange={handleChange}
        checked={edit}
        className='react-switch'
      />
    </div>
  );
};

export default EditSwitch;
