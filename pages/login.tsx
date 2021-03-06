import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginContainer from '../containers/auth/LoginContainer';
import useLoggedIn from '../libs/hooks/useLoggedIn';

function LoginPage() {
  useLoggedIn();

  return (
    <AuthTemplate mode="login">
      <LoginContainer />
    </AuthTemplate>
  );
}

export default LoginPage;
