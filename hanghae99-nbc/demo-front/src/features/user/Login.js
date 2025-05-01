import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LoginRequest } from './userSlice'

export const Login = () => {
  const listStat = useSelector((state) => state.user.listStat);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userEmail', user.email);
    formData.append('password', user.password);
      
    dispatch(LoginRequest(formData));
  };

  useEffect(() => {
    if(isAuthenticated) navigate('/home');
    if(listStat == 'failed') alert("login Failed");
  }, [isAuthenticated, listStat]);

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="이메일" value={user.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="비밀번호" value={user.password} onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
      <Link to="/join">
        <button>회원가입</button>
      </Link>
    </div>
  );
}