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



function App() {
  return (
    <div style={{ display: "flex" }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Menu />
        <Routes>
          <Route path="/" exact element={<Overview />} />
          <Route path="/Sales" exact  element={<Sales />} />
          <Route path="/Products" exact element={<Products />} />
          <Route path="/customers" exact element={<Customers />} />
      
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
