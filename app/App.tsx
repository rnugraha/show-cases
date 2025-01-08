import React, { useState } from "react";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Layout from "./layout";
import { Route, Routes } from "react-router";
import Confirmation from "./pages/Confirmation";
import InfiniteScroll from "./pages/InfiniteScroll/InfiniteScroll";
import DataTable from "./pages/DataTable";

export default function App() {
  const [registree, setRegistree] = useState(null);
  function handleOnSubmit(data: any) {
    setRegistree(data);
  }
  return (
    <Layout>
      <Routes>
        <Route index element={<RegistrationForm onSubmit={handleOnSubmit} />} />
        <Route
          path="registration-form"
          element={<RegistrationForm onSubmit={handleOnSubmit} />}
        />
        <Route
          path="confirm"
          element={<Confirmation registree={registree} />}
        />
        <Route path="infinite-scroll" element={<InfiniteScroll />} />
        <Route path="data-table" element={<DataTable />} />
      </Routes>
    </Layout>
  );
}
