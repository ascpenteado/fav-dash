import type { Meta, StoryObj } from '@storybook/react';
import ModalComponent from './Modal.component';
import Button from '../Button/Button.component';
import { Colors } from '../../../types/Colors';
import { useState } from 'react';

const meta: Meta<typeof ModalComponent> = {
  component: ModalComponent,
  argTypes: {
    onClose: { action: 'onClose', table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof ModalComponent>;

const Template = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi
          asperiores accusamus quod ipsam omnis. Iusto aliquam totam vero ex,
          optio sint tempora laboriosam, laudantium quisquam officia animi quia
          libero?
        </p>
      </ModalComponent>
      <Button variant={Colors.PrimaryColor} onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
    </>
  );
};

export const Modal: Story = {
  render: () => <Template></Template>,
};
