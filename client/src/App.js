import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DrawerNav from './components/DrawerNav';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
