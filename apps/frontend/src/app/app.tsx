import { Route, Routes } from 'react-router-dom';
import {
  customTheme,
  Header,
  queryClient,
  ShoppingList,
} from '@full-stack-test-task/shopping-list';
import { ThemeProvider } from 'flowbite-react';
import { QueryClientProvider } from '@tanstack/react-query';

export function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<ShoppingList />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
