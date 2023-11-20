import { FC, useState } from 'react';
import * as yup from 'yup';
import Button from '../../../elements/Button/Button.component';
import Input from '../../../elements/Input/Input.component';
import s from './ValidatedForm.style.module.scss';
import { ColorsType } from '../../../../types/Colors';
import { Receiver, statusColorMap } from '../../../../types/api';
import Badge from '../../../elements/Badge/Badge.component';
import Icon from '../../../elements/Icon/Icon.component';
import trash from '../../../../assets/svg/trashcan.svg';

export type FormValues = {
  name: string;
  taxId: string;
  email: string;
  pixType: string;
  pixKey: string;
};

type AddFavoriteFormProps = {
  onCancel: () => void;
  onSave: (data: Partial<FormValues>) => void;
  onDelete: (id: string) => void;
  formData?: FormValues;
  favorite: Receiver;
};

const AddFavoriteForm: FC<AddFavoriteFormProps> = ({
  onCancel,
  onSave,
  onDelete,
  favorite,
}) => {
  const {
    name,
    tax_id,
    email,
    status,
    account,
    account_type,
    bank_code,
    bank_name,
  } = favorite || {};

  const initialFormState: Partial<FormValues> = {
    email: email,
  };
  const [formValues, setFormValues] =
    useState<Partial<FormValues>>(initialFormState);

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('E-mail é obrigatório'),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});

    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      onSave(formValues);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const fieldErrors: Partial<FormValues> = {};
        error.inner.forEach((err) => {
          const path = err.path as keyof FormValues;
          if (path) {
            fieldErrors[path] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.status}>
          <h3 className={s.name}>{name}</h3>
          <div className={s.badgeWrapper}>
            <Badge
              status={status}
              variant={statusColorMap[status] as ColorsType}
            />
          </div>
        </div>
        <div className={s.formWrapper}>
          <div className={s.infoGroup} style={{ gridColumn: 'span 2' }}>
            <p className={s.label}>CPF / CNPJ</p>
            <p className={s.value}>{tax_id}</p>
          </div>

          <div className={s.infoGroup}>
            <p className={s.label}>Banco</p>
            <p className={s.value}>{bank_name}</p>
          </div>

          <div className={s.infoGroup}>
            <p className={s.label}>Agência</p>
            <p className={s.value}>{bank_code}</p>
          </div>

          <div className={s.infoGroup}>
            <p className={s.label}>Tipo de Conta</p>
            <p className={s.value}>{account_type}</p>
          </div>

          <div className={s.infoGroup}>
            <p className={s.label}>Conta poupança</p>
            <p className={s.value}>{account}</p>
          </div>

          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.formGroup}>
              <label htmlFor="email">Email do favorecido</label>
              <Input
                id="email"
                name="email"
                hasBorder
                value={formValues.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <span className={s.errorMsg}>{errors.email}</span>
              )}
            </div>

            <div className={s.btnsWrapper}>
              <Button outline onClick={onCancel}>
                Cancelar
              </Button>
              <div className={s.btnRight}>
                <Button
                  variant="danger-color"
                  responsive
                  className={s.deleteBtn}
                  onClick={() => onDelete(favorite.id)}
                  type="button"
                >
                  <div className={s.iconWrapper}>
                    <Icon iconUrl={trash} />
                  </div>
                </Button>
                <Button variant="success-color" type="submit">
                  Salvar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFavoriteForm;
