import '@components/style.css';
import { Outlet } from 'react-router-dom';
import { Menu, Toast } from '@components';
import { useSnapshot } from 'valtio';
import { toastStore } from '../store/toast/toast.state';
import { toastActions } from '../store/toast/toast.actions';

export function App() {
  const toastState = useSnapshot(toastStore);
  const toastVariantMap = {
    success: 'success-color',
    error: 'danger-color',
  };

  const handleToastClose = (id: string) => {
    toastActions.removeToast(id);
  };

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

      {toastState.toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => handleToastClose(toast.id)}
          message={toast.message}
          variant={toastVariantMap[toast.type] as any}
          visible={true}
          duration={3000}
        />
      ))}
    </div>
  );
}

export default App;
