import React from 'react';
import s from './AddFavoriteForm.style.module.scss';
import { Button, Input, Select } from '@components';
import { useNavigate } from 'react-router-dom';

const AddFavoriteForm = () => {

  const navigate = useNavigate();


  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Quais os dados do favorecido?</h2>
      <div className={s.formWrapper}>
        <div className={s.formGroup}>
          <label htmlFor="name">
            Qual o nome completo ou razão social do favorecido?
          </label>
          <Input id="name" name="name" hasBorder />
        </div>

        <div className={s.formGroup}>
          <label htmlFor="tax-id">Qual o CPF ou CNPJ?</label>
          <Input id="tax-id" name="tax-id" hasBorder />
        </div>

        <div className={s.formGroup}>
          <label htmlFor="email">
            Qual o e-mail para o envio do comprovante?
          </label>
          <Input id="email" name="email" hasBorder />
        </div>

        <h2 className={s.title}>Qual a chave pix?</h2>

        <div className={`${s.formGroup} ${s.pixType}`}>
          <label htmlFor="pix-type">Tipo de chave</label>
          <Select
            id="pix-type"
            name="pix-type"
            options={[
              {
                label: 'E-mail',
                value: 'email',
              },
              {
                label: 'Phone',
                value: 'phone',
              },
            ]}
            onSelect={() => console.log('selected')}
          />
        </div>

        <div className={s.formGroup}>
          <label htmlFor="pix-value">Chave</label>
          <Input id="pix-value" name="pix-value" hasBorder />
        </div>
      </div>
      <div className={s.btnsWrapper}>
        <Button outline onClick={() => navigate('/')}>Cancelar</Button>
        <Button variant='success-color'>Salvar</Button>
      </div>
    </div>
  );
};

export default AddFavoriteForm;
