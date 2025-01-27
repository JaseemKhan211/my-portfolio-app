import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="min-h-screen p-8">
        <h2 className="text-center text-3xl font-bold mt-4">
          Welcome to My Portfolio!
        </h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
