import { Provider } from 'react-redux';
import styled from 'styled-components';
import { store } from './store';

const AppContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: blue;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Title>Welcome to SPA Project</Title>
        <p>This is a Vite React TypeScript project</p>
      </AppContainer>
    </Provider>
  );
}

export default App;
