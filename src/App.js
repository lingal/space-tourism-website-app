import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Crew, Destination, Technology } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
