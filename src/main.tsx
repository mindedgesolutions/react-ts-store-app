import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { store } from "./store.ts";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </ThemeProvider>
);
