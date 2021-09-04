import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import store from './redux/store';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import UsersContainer from './components/Users/UsersContainer';



function App(props) {
 
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Route 
            path='/dialogues'
            render={ () => <DialoguesContainer 
              />} />
          <Route
            path='/profile'
            render={ () => <Profile  
            />}/>
          <Route path='/news' component={News } />
          <Route path='/users' render={ () => <UsersContainer/> } />
        </div>
      </div>

  );
}

export default App;
