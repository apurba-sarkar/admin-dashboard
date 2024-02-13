import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Menu from "./components/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const handleButtonClick = () => {
  const shouldClose = window.confirm('Are you sure you want to close this tab?');
  if (shouldClose) {
    window.close();
  }
};

function App() {
  return (
    <div style={{ display: "flex" }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Menu />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
      
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
