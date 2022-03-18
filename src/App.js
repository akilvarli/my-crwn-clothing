import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.coponent';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {

  const Shop = () => {
    return (
      <h1>This is the Shop Page</h1>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;