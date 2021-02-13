import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Modal from './comps/Modal';
import { Toaster } from 'react-hot-toast';
import Signup from './comps/Signup';
import Signin from './comps/Signin';
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
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
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
