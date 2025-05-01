import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutRequest, UserRequest } from './userSlice';
import { useNavigate } from 'react-router-dom';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state) => state.user.userName);
  const userEmail = useSelector((state) => state.user.userEmail);
  const role = useSelector((state) => state.user.role);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(UserRequest());
      } catch (error) {
        console.error('Error checking user status:', error);
      }
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    if(!isAuthenticated) navigate('/login');
  }, [isAuthenticated]);
  

  const handleLogout = async () => {
    dispatch(LogoutRequest());
  };

  const handleHome = async() => {
    navigate('/home');
  }

  return (
    <div>
      <h1>마이페이지</h1>
      <p>이름: {userName}</p>
      <p>이메일: {userEmail}</p>
      <p>권한: {role}</p>
      <button onClick={handleHome}>홈</button>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}