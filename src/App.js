import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Crew, Destination, Technology } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/crew">
          <Crew />
        </Route>
        <Route exact path="/destination">
          <Destination />
        </Route>
        <Route exact path="/technology">
          <Technology />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
