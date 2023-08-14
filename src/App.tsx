import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import KanbanPage from "./pages/KanbanPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Render KanbanPage component on the default route */}
          <Route path="/" element={<KanbanPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
