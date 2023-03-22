import './App.css'
import './DefoultStyle.css'
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="app-wraper">
      
      <Header />

      <Nav />

      <Body />

    </div>
  );
}

export default App;
