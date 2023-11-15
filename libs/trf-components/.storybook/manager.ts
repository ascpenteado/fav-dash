import logo from '../src/assets/png/transfeera-logo.png';
import { create } from '@storybook/theming/create';
import { addons } from '@storybook/manager-api';

const theme = create({
  base: 'dark',
  brandTitle: 'Transfeera Storybook',
  brandUrl: 'https://transfeera.com/',
  brandImage: logo,
  brandTarget: '_blank',
});

addons.setConfig({ theme });
