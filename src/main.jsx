import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import BarChart from "./pages/barChart/BarChart.jsx";
import Faq from "./pages/faq/Faq.jsx";
import Calendar from "./pages/calendar/Calendar.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Form from "./pages/form/Form.jsx";
import Geography from "./pages/geography/Geography.jsx";
import Invoices from "./pages/invoices/Invoices.jsx";
import LineChart from "./pages/lineChart/LineChart.jsx";
import PieChart from "./pages/pieChart/PieChart.jsx";
import Team from "./pages/team/Team.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="bar" element={<BarChart />} />
        <Route path="faq" element={<Faq />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="form" element={<Form />} />
        <Route path="geography" element={<Geography />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="line" element={<LineChart />} />
        <Route path="pie" element={<PieChart />} />
        <Route path="team" element={<Team />} />


        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
