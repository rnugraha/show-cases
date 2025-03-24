import React, { useState } from "react";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Layout from "./layout";
import { Route, Routes } from "react-router";
import Confirmation from "./pages/Confirmation";
import InfiniteScroll from "./pages/InfiniteScroll/InfiniteScroll";
import DataTable from "./pages/DataTable";
import Dashboard from "./pages/Dashboard";

interface Registree {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  birthDate: string;
  gender: "male" | "female" | "non-binary" | undefined;
  streetName: string;
  city: string;
  postalCode: string;
  country: "US" | "GB" | "AU" | "IN" | "CA" | undefined;
  badmintonLevel: "beginner" | "intermediate" | "advanced";
  membershipRules: boolean;
}

export const RegistreeContext = React.createContext<{
  registree: Registree | null;
  setRegistree: React.Dispatch<React.SetStateAction<Registree | null>>;
}>({
  registree: {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    birthDate: "",
    gender: undefined,
    streetName: "",
    city: "",
    postalCode: "",
    country: undefined,
    badmintonLevel: "beginner",
    membershipRules: false,
  },
  setRegistree: () => {},
});

export default function App() {
  const [registree, setRegistree] = useState(null as Registree | null);
  return (
    <RegistreeContext.Provider value={{ registree, setRegistree }}>
      <Layout>
        <Routes>
          <Route index element={<RegistrationForm />} />
          <Route path="registration-form" element={<RegistrationForm />} />
          <Route path="confirm" element={<Confirmation />} />
          <Route path="infinite-scroll" element={<InfiniteScroll />} />
          <Route path="data-table" element={<DataTable />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </RegistreeContext.Provider>
  );
}
