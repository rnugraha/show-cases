import React, { useState } from "react";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Layout from "./layout";
import { Route, Routes } from "react-router";
import InfiniteScroll from "./pages/InfiniteScroll";

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
        <Route path="infinite-scroll" element={<InfiniteScroll />} />
      </Routes>
    </Layout>
  );
}
