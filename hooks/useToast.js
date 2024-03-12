import { toast } from 'react-toastify'
import { useTheme } from "next-themes";

const useToast = () => {
    const { theme } = useTheme();

    const showToast = (message, type) => {
        const toastMethod = type === 'success' ? toast.success : type === 'error' ? toast.error : toast.warning

        toastMethod(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
        })
    }

    const handleSuccess = (message) => {
        showToast(message || 'Success!', 'success')
    }

    const handleError = (message) => {
        showToast(message || 'Something went wrong.', 'error')
    }

    const handleWarning = (message) => {
        showToast(message || 'Warning!', 'warning')
    }

    return [handleSuccess, handleError, handleWarning]
}

export default useToast