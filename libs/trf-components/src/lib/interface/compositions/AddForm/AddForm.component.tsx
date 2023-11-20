import { FC, useState } from 'react';
import * as yup from 'yup';
import Button from '../../../elements/Button/Button.component';
import Input from '../../../elements/Input/Input.component';
import Select from '../../../elements/Select/Select.component';
import s from './AddForm.style.module.scss';

export type FormValues = {
  name: string;
  taxId: string;
  email: string;
  pixType: string;
  pixKey: string;
};

type AddFavoriteFormProps = {
  onCancel: () => void;
  onSave: (data: FormValues) => void;
  formData?: FormValues;
};

const pixKeyOptions = [
  {
    label: 'Aleatória',
    value: 'aleatoria',
  },
  {
    label: 'CNPJ',
    value: 'cnpj',
  },
  {
    label: 'CPF',
    value: 'cpf',
  },
  {
    label: 'E-mail',
    value: 'email',
  },
];

const AddFavoriteForm: FC<AddFavoriteFormProps> = ({ onCancel, onSave }) => {
  const initialFormState: FormValues = {
    name: '',
    taxId: '',
    email: '',
    pixType: '',
    pixKey: '',
  };
  const [formValues, setFormValues] = useState<FormValues>(initialFormState);

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const validationSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    taxId: yup
      .string()
      .required('CPF ou CNPJ é obrigatório')
      .matches(/^[0-9]+$/, 'Digite um CPF/CNPJ válido'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('E-mail é obrigatório'),
    pixType: yup.string().required('Tipo de chave PIX é obrigatório'),
    pixKey: yup.string().required('Chave PIX é obrigatória'),
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
        <h2 className={s.title}>Quais os dados do favorecido?</h2>
        <div className={s.formWrapper}>
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.formGroup}>
              <label htmlFor="name">
                Qual o nome completo ou razão social do favorecido?
              </label>
              <Input
                id="name"
                name="name"
                hasBorder
                value={formValues.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className={s.errorMsg}>{errors.name}</span>}
            </div>

            <div className={s.formGroup}>
              <label htmlFor="tax-id">Qual o CPF ou CNPJ?</label>
              <Input
                id="tax-id"
                name="taxId"
                hasBorder
                value={formValues.taxId}
                onChange={handleInputChange}
              />
              {errors.taxId && (
                <span className={s.errorMsg}>{errors.taxId}</span>
              )}
            </div>

            <div className={s.formGroup}>
              <label htmlFor="email">
                Qual o e-mail para o envio do comprovante?
              </label>
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

            <h2 className={s.title}>Qual a chave pix?</h2>
            <div className={`${s.formGroup} ${s.pixType}`}>
              <label htmlFor="pix-type">Tipo de chave</label>
              <Select
                id="pix-type"
                name="pixType"
                options={pixKeyOptions}
                onSelect={(value: string) =>
                  setFormValues({ ...formValues, pixType: value })
                }
              />
              {errors.pixType && (
                <span className={s.errorMsg}>{errors.pixType}</span>
              )}
            </div>

            <div className={s.formGroup}>
              <label htmlFor="pix-value">Chave</label>
              <Input
                id="pix-value"
                name="pixKey"
                hasBorder
                value={formValues.pixKey}
                onChange={handleInputChange}
              />
              {errors.pixKey && (
                <span className={s.errorMsg}>{errors.pixKey}</span>
              )}
            </div>

            <div className={s.btnsWrapper}>
              <Button outline onClick={onCancel}>
                Cancelar
              </Button>
              <Button variant="success-color" type="submit">
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFavoriteForm;
