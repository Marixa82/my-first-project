// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {BasicForm}  from './components/BasicForm';
import { AdvancedForm } from './components/AdvancedForm';
import { PasswordForm } from './components/FormBootstrap/PasswordForm';
import React from 'react';

function App() {
  const [view, setView] = useState("basic")

  const passwordData = {
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  };

  const handleFieldUpdate = (field: keyof typeof passwordData, value: string) => {
    console.log(`Field ${field} updated to: ${value}`);
  }
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>
        <h3
          onClick={() => setView("password")}
          style={{ color: view === "password" ? "#fff" : "" }}
        >
          Password
        </h3>
      </nav>
      {view === "basic" && <BasicForm />}
      {view === "advanced" && <AdvancedForm />}
      {view === "password" && (
        <PasswordForm
          passwordData={passwordData}
          onFieldUpdate={handleFieldUpdate}
        />
      )}
    </div>);

}

export default App;