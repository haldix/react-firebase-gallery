import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Modal from './comps/Modal';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Signup from './comps/Signup';
import Login from './comps/Login';
import Gallery from './pages/Gallery';
import { AuthProvider } from './contexts/AuthContext';

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
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
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
