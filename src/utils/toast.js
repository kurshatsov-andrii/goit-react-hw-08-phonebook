import toast from 'react-hot-toast';

const createToast = (type, message) => {
  if (type === 'success') {
    toast.success(message, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  } else if (type === 'error') {
    toast.error(message, {
      style: {},
    });
  }
};

export default createToast;
