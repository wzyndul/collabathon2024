import { Header } from './components/Header/Header';
import { RecommendedProducts } from './widgets/RecommendedProducts/RecommendedProducts';
import './App.css';

function App() {

  return (
    <div className="container">
      <Header />
      <div className='page'>
        <RecommendedProducts/>
      </div>
    </div>
  )
}

export default App
