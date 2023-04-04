import './App.css'
import './DefoultStyle.css'
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = (props) => {
  return (
    <div className="app-wraper">
      
      <Header />

      <Nav users={props.state.messages.users} />

      <Body state={props.state} bll={props.bll} />

    </div>
  );
}

export default App;
