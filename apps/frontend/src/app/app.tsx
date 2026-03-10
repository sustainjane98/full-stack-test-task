import { Route, Routes } from 'react-router-dom';
import {
  customTheme,
  Header,
  ShoppingList,
} from '@full-stack-test-task/shopping-list';
import { ThemeProvider } from 'flowbite-react';
export function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<ShoppingList />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
