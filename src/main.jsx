

import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
 <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider>
  
);
