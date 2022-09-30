import { Provider } from 'react-redux'
import { store } from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home';
import Error404 from './containers/errors/Error404.JSX';
import Signup from './containers/auth/Signup';
import Activate from './containers/auth/Activate';
import Signin from './containers/auth/Signin';

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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;