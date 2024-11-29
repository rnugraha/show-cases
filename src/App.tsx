import React from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

export default function App() {
  return (
    <>
      <div className="">
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/3 md:w-1/6 px-2">
            <div className="flex h-screen flex-col justify-between border-e bg-white">
              <div className="px-4 py-6">
                <ul className="mt-6 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      SC1. Registration Form
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
                >
                  <img
                    alt=""
                    src="https://avatars.githubusercontent.com/u/2835281?s=400&u=2fe12c4eeb3418337f0b81882ff55bcebcc9c71d&v=4"
                    className="size-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-xs">
                      <strong className="block font-medium">
                        Riza Nugraha
                      </strong>

                      <span> rnugraha@gmail.com </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </aside>
          <main role="main" className="w-full sm:w-2/3 md:w-5/6 pt-1 px-2">
            <RegistrationForm />
          </main>
        </div>
      </div>
    </>
  );
}
