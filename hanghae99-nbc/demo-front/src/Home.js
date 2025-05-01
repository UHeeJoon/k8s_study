import React from 'react';
import { useSelector} from 'react-redux'
import { Link} from 'react-router-dom'

export const Home = () => {
  const userEmail = useSelector((state) => state.user.userEmail);
  const role = useSelector((state) => state.user.role);

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이메일: {userEmail}</p>
      <p>권한: {role}</p>

      <Link to={'/userInfo'} className="button">마이페이지</Link>
    </div>
  );
}