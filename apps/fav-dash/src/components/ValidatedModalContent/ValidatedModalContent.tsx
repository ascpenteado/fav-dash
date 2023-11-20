import { FC } from 'react';
import { Receiver } from '../../types/api.type';

export type ValidatedModalContentProps = {
  favorite: Receiver;
};

const ValidatedModalContent: FC<ValidatedModalContentProps> = ({
  favorite,
}) => {
  return <div>{favorite.name}</div>;
};

export default ValidatedModalContent;
