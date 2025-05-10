
import React from 'react';
import LoginForm from '@/components/Auth/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
