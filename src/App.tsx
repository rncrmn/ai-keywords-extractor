import type { Component } from "solid-js";
import { Header, TextInput, Footer } from "./components";

const App: Component = () => {
  return (
    <div class="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-sky-400 to-cyan-300">
      <div class="bg-white py-6 px-8 rounded-md shadow-md max-w-xl w-full">
        <Header />
        <TextInput />
        <Footer />
      </div>
    </div>
  );
};

export default App;
