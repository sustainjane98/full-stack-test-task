import { Route, Routes } from 'react-router-dom';
import { Header, ShoppingList } from '@full-stack-test-task/shopping-list';

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShoppingList />} />
      </Routes>
    </>
  );
}

export default App;
