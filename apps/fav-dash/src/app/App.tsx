import '@components/style.css';
import { Outlet } from 'react-router-dom';
import { Menu } from '@components';

export function App() {
  return (
    <div>
      <Menu showClose={false} onClose={() => console.log('hei')} />
      <Outlet />
    </div>
  );
}

export default App;
