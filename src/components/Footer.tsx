import { Component } from "solid-js";
import OpenAILogo from "../assets/openai-logo.svg";

const Footer: Component = () => {
  return (
    <div class="text-center">
      <p class="flex gap-2 justify-center items-center text-slate-700 text-sm font-medium">
        <img src={OpenAILogo} alt="OpenAI Logo" width={16} height={16} />
        Powered by OpenAI
      </p>
    </div>
  );
};

export default Footer;
