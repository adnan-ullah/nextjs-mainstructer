import React from "react";

export default function FormComponent() {
  return (
    <form>
        <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
         Name*
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Email*
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@email.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
         Message
        </label>
        <textarea
          type="text"
          id="message"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label className="ml-2 text-sm font-medium text-red-900 dark:text-gray-300">
          I agree with the{" "}
          <a
            href="#"
            className="text-black hover:underline dark:text-gray-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-gray-900 bg-transparent hover:bg-green-300 border-red-900 border focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send
      </button>
    </form>
  );
}
