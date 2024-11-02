import { useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/authSlice'; 
const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); 
  };

  return (
    <button onClick={handleLogout} className='btn btn-primary rounded-full'>Logout</button>
  );
};

export default LogoutButton;