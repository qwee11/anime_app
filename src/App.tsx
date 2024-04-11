import { Container } from 'react-bootstrap';
import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';

function App() {

  return (
    <div >
      <Header />
      <Container fluid="lg" >
        <AppRoutes />
      </Container>
    </div>
  )
}

export default App
