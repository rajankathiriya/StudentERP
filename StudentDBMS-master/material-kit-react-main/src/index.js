import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import AdvancedERP from './FrontPage/AdvancedERP/AdvancedERP';
import LoginEMS from './FrontPage/EMS/Login';
import RegistrationEMS from './FrontPage/EMS/Registration';
import Dashboard from './layouts/dashboard';
import RequireAuth from './FrontPage/EMS/Private/Requiredau';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      {/* <AdvancedERP /> */}
      <Routes>
        <Route path='/' element={<AdvancedERP />} />
        <Route path='/login' element={<LoginEMS />} />
        <Route path='/registration' element={<RegistrationEMS />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </HelmetProvider>
);

serviceWorker.unregister();

reportWebVitals();
