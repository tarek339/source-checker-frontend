import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./hooks/redux/store.ts";
import axios from "axios";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/theme/theme.ts";
import "./assets/theme/styles/index.css";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem("token");
  const studentToken = sessionStorage.getItem("student-token");
  if (token) {
    request.headers.Authorization = token;
  }
  if (studentToken) {
    request.headers.Authorization = studentToken;
  }
  return request;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
