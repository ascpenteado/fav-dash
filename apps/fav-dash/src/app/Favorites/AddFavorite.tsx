import React from 'react';
import { AddFavoriteForm } from '@components';
import { FormValues } from '@components/lib/interface/compositions/AddFavoriteForm/AddFavoriteForm.component';
import { useNavigate } from 'react-router-dom';

const AddFavorite = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = (data: FormValues) => {
    console.log('>> data', data);
  };

  return <AddFavoriteForm onCancel={handleCancel} onSave={handleSave} />;
};

export default AddFavorite;
