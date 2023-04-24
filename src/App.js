import './App.css';
import Blog from './components/Blog';
import News from './components/News';
import basicNews from "./basicNews.json"
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path='/' element={<News />}></Route>
          <Route exact path='/blog' element={<Blog Heading={basicNews.title} time={basicNews.time} date={basicNews.date} description={basicNews.description} />}></Route>
        </Routes>
      </Switch>
    </>
  );
}

export default App;
