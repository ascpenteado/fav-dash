import { FC } from 'react';
import { Receiver, statusColorMap } from '../../types/api.type';
import { AddFavoriteForm, Badge } from '@components';
import { ColorsType } from '@components/types/Colors';
import s from './DraftModalContent.style.module.scss';

export type DraftModalContentProps = {
  favorite: Receiver;
};

const DraftModalContent: FC<DraftModalContentProps> = ({ favorite }) => {
  const { name, status } = favorite;
  return (
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
        <AddFavoriteForm
          onCancel={() => console.log('cancel')}
          onSave={() => console.log('save')}
        />
      </div>
    </div>
  );
};

export default DraftModalContent;
