
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
// import store from './store';




const headerTest = {
  site_test: "my test ",
  nav: [
    {"link" : "1", "text": " 1"},
    {"link" : "2", "text": " 2"},
    {"link" : "3", "text": " 3"},
    {"link" : "4", "text": " 4"},
    {"link" : "5", "text": " 5"},
    {"link" : "6", "text": " 6"},
    {"link" : "7", "text": " 7"},
    {"link" : "8", "text": " 8"},
    {"link" : "9", "text": " 9"},
    {"link" : "10", "text": " 10"},
    {"link" : "11", "text": " 11"},
    {"link" : "12", "text": " 12"},
    {"link" : "13", "text": " 13"},
    {"link" : "14", "text": " 14"},
    {"link" : "15", "text": " 15"},
  ]
}



function App(props) {
  return (
    <div className="App">
      <Header  data={headerTest}/>
      <Main />
      <Sidebar />
      <Footer/>
    </div>
  );
}

export default App;
