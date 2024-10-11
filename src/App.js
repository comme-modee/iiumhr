import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import AppRouter from './routes/AppRouter';
import './style/Root.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
}

export default App;
