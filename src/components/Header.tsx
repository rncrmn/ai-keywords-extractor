import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <div class="text-center mb-6">
      <h1 class="text-2xl md:text-4xl font-semibold font-mono mb-6">
        💡AI Keywords Extractor
      </h1>
      <p class="text-sm md:text-lg">
        Paste in your text below and we'll the keywords for you.
      </p>
    </div>
  );
};

export default Header;
