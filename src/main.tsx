import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./hooks/redux/store.ts";

import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  const studentToken = localStorage.getItem("student-token");

  if (token) {
    request.headers.Authorization = token;
  }

  if (studentToken) {
    request.headers.Authorization = studentToken;
  }

  return request;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
