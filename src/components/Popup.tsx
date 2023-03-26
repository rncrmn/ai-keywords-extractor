import { Component, Setter } from "solid-js";
import { copyToClipboard } from "../utils/copytoclipboard";

interface Props {
  keywords: string;
  setIsOpen: Setter<boolean>;
}

const Popup: Component<Props> = (props) => {
  const handleCopy = () => {
    copyToClipboard(props.keywords);
  };

  return (
    <div class="fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto bg-slate-900 bg-opacity-70">
      <div class="relative w-screen h-screen flex justify-center items-center">
        <div class="relative bg-white max-w-lg w-full rounded-lg shadow">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent bg-gray-100 hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={() => props.setIsOpen(false)}
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="pt-12 p-8 text-center">
            <h3 class="mb-6 text-lg font-normal text-gray-900 dark:text-gray-400">
              {props.keywords}
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white rounded-xl text-sm font-medium px-5 py-2.5 uppercase"
              onClick={handleCopy}
            >
              Copy Keywords
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
