import '@components/style.css';
import { Outlet } from 'react-router-dom';
import { Menu } from '@components';

export function App() {
  return (
    <div>
      <Menu showClose={false} onClose={() => console.log('hei')} />
      <Outlet />
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '90px',
        }}
      >
        <img src="png/transfeera-logo.png" alt="logo transfeera cinza" />
      </footer>
    </div>
  );
}

export default App;
