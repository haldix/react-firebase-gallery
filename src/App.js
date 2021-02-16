import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Signup from './comps/auth/Signup';
import Login from './comps/auth/Login';
import Gallery from './pages/Gallery';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './comps/auth/Profile';
import PrivateRoute from './comps/auth/PrivateRoute';
import ForgotPassword from './comps/auth/ForgotPassword';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    e.stopPropagation();
    setEdit(!edit);
  };

  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/profile' component={Profile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/gallery'>
              <Gallery
                handleEdit={handleEdit}
                edit={edit}
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
              />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      <Toaster position='bottom-center' />
    </div>
  );
}

export default App;
