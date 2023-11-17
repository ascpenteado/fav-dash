import type { Meta, StoryObj } from '@storybook/react';
import TableComponent from './Table.component';

const meta: Meta<typeof TableComponent> = {
  component: TableComponent,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableComponent>;

const data = [
  {
    favorecido: 'John Doe',
    cpf: '123.456.789-00',
    banco: 'Bank A',
    agencia: '1234',
    cc: '5678-9',
    status: 'Active',
  },
  {
    favorecido: 'Jane Smith',
    cpf: '987.654.321-00',
    banco: 'Bank B',
    agencia: '5678',
    cc: '1234-5',
    status: 'Inactive',
  },
];

const Render = () => {
  return (
    <TableComponent>
      <thead>
        <th>Favorecido</th>
        <th>CPF</th>
        <th>Banco</th>
        <th>Agência</th>
        <th>CC</th>
        <th>Status do Favorecido</th>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.favorecido}</td>
            <td>{item.cpf}</td>
            <td>{item.banco}</td>
            <td>{item.agencia}</td>
            <td>{item.cc}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </TableComponent>
  );
};

export const Table: Story = {
  render: () => <Render />,
};
