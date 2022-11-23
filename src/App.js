import './App.css';
import ShareImg from './Icons/share.svg';
import Widget from './components/Widget';

function App() {
  return (
    <div className="App">
      <div className="button">
        <div>Share</div>
        <div className="share">
          <img src={ShareImg} alt="Share Image" />
        </div>
      </div>
      <div className="widget">
        <Widget />
      </div>
    </div>
  );
}

export default App;
