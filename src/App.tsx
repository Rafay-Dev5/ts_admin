import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminTemplate from "./templates/admintemplate";
import SuperAdminDashboard from "./pages/superadmindashboard";
import ManageMerchant from "./pages/merchant/managemerchant";
import MerchantList from "./pages/merchant/merchantlist";

import AuthContextProvider from "./context/authcontext";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route element={<AdminTemplate />}>
            <Route path="/" element={<SuperAdminDashboard />} />
            <Route path="/merchantlist" element={<MerchantList />} />
            <Route path="/managemerchant" element={<ManageMerchant />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
