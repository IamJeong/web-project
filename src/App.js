import TextImageProblem from './Components/TextImageProblem';
import MathProblem from './Components/MathProblem'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<TextImageProblem/>} />
      <Route path = "/page2"element = {<MathProblem/>} />
    </Routes>
  )
}

export default App;
