import { toast } from 'react-toastify';

export const notifySuccess = (props) => {
    toast.success(props.Message, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: props.ProgressBarHide,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
}

export const notifyError = (props) => {
    toast.error(props.Message, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: props.ProgressBarHide,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
}
export const notifyWarning = (props) => {
    toast.warn(props.Message, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: props.ProgressBarHide,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
}
export const notifyDefault = (props) => {
    toast(props.Message, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: props.ProgressBarHide,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
}

export const notifyInfo = (props) => {
    toast.info(props.Message, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: props.ProgressBarHide,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
}