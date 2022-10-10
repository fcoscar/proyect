import { Provider } from 'react-redux'
import { store } from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home';
import Error404 from './containers/errors/Error404.jsx';
import Signup from './containers/auth/Signup';
import Activate from './containers/auth/Activate';
import Signin from './containers/auth/Signin';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';
import Explore from './containers/Explore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route excact path='/' element={<Home />} />
          <Route excact path='/signin' element={< Signin />} />
          <Route excact path='/signup' element={< Signup />} />
          <Route excact path='/activate/:uid/:token' element={< Activate />} />
          <Route excact path='/reset_password' element={< ResetPassword />} />
          <Route excact path='/password/reset/confirm/:uid/:token' element={< ResetPasswordConfirm />} />
          <Route excact path='/explore' element={< Explore />} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;