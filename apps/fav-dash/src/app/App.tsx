import { Menu, Modal, Toast } from '@components';
import '@components/style.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { modalActions } from '../store/modal/modal.actions';
import { modalStore } from '../store/modal/modal.state';
import { toastActions } from '../store/toast/toast.actions';
import { toastStore } from '../store/toast/toast.state';
import { loaderStore } from '../store/loader/loader.state';
import { useEffect } from 'react';
import { navbarActions } from '../store/navbar/navbar.actions';
import { navbarStore } from '../store/navbar/navbar.state';

export function App() {
  const toastState = useSnapshot(toastStore);
  const modalState = useSnapshot(modalStore);
  const { showCloseIcon } = useSnapshot(navbarStore);
  const { isLoading } = useSnapshot(loaderStore);
  const navigate = useNavigate();
  const toastVariantMap = {
    success: 'success-color',
    error: 'danger-color',
  };

  const handleToastClose = (id: string) => {
    toastActions.removeToast(id);
  };

  const renderModalContent = () => {
    if (!modalState.content) return;

    const Component = modalState.content.Component;
    return <Component {...modalState.content.props} />;
  };

  // For better loader effect
  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);

  useEffect(() => {
    document.body.style.overflow = modalState.isOpen ? 'hidden' : 'auto';
  }, [modalState.isOpen]);

  return (
    <div style={{ overflow: isLoading ? 'hidden' : 'auto' }}>
      <Menu
        showClose={showCloseIcon}
        onClose={() => {
          navbarActions.showCloseIcon(false);
          navigate('/');
        }}
        onLogoClick={() => navigate('/')}
      />
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

      {modalState.content && (
        <Modal
          isOpen={modalState.isOpen}
          onClose={() => modalActions.closeModal()}
        >
          {renderModalContent()}
        </Modal>
      )}
    </div>
  );
}

export default App;
