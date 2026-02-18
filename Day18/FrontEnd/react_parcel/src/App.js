import React from "react"; //using ES module instead of CDN
import { Header, Footer } from "./components/Layout"; // {}- name import and export
import Card from "./components/Card"; //default import export

export default function App() {
  return (
    <div>
      <Header />
      <h1>React App using Parcel</h1>
      <Card title="React" />
      <Card title="Parcel Bundler" />
      <Footer />
    </div>
  );
}
