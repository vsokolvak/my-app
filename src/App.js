import './App.css'
import './DefoultStyle.css'
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavConteiner';

const App = (props) => {
  return (
    <div className="app-wraper">
      
      <Header />

      <NavContainer />

      <Body />

    </div>
  );
}

export default App;
