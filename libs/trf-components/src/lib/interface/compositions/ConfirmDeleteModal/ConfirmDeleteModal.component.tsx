import { FC } from 'react';
import Button from '../../../elements/Button/Button.component';
import s from './ConfirmDeleteModal.style.module.scss';

type ConfirmDeleteModalProps = {
  confirmText: string;
  onCancel: () => void;
  onDelete: () => void;
};

const AddFavoriteForm: FC<ConfirmDeleteModalProps> = ({
  confirmText,
  onCancel,
  onDelete,
}) => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Excluir favorecido</h4>
      <p className={s.name}>{confirmText}</p>
      <p className={s.description}>
        O Histórico de pagamentos para este favorecido será uantido, mas ele
        será removido da sua lista de favorecidos.
      </p>
      <div className={s.btnsWrapper}>
        <Button outline onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          variant="danger-color"
          className={s.deleteBtn}
          onClick={onDelete}
          type="button"
        >
          <div className={s.iconWrapper}>Confirmar exclusão</div>
        </Button>
      </div>
    </div>
  );
};

export default AddFavoriteForm;
