import './styles/App.css';
import socialityLogo from './img/sociality-logo.svg';
import Clients from './components/Clients';
import Menu from './components/Menu';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <div className='navigation'>
        <div className='sociality-logo'>
          <img src={socialityLogo} alt='Sociality Logo' />
        </div>
        <div className='navigation-bottom'>
          <Clients />
          <Menu />
        </div>
      </div>
      <Main />
    </div>
  );
}

export default App;
