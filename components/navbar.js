import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useLanguage } from "../contexts/translate";

const Navbar = () => {
  const { translations: { navbar }, changeLanguage, language } = useLanguage()

  const handleClick = (event) => {
    event.preventDefault();

    const { value } = event.target;
    const element = document.getElementById(value);
    if(!element) return;
    element.scrollIntoView({ behavior: "smooth", block: 'center' });
  }

  const handleClickContact = (event) => {
    event.preventDefault();

    const element = document.getElementById('contacto');
    if(!element) return;
    element.scrollIntoView({ behavior: "smooth", block: 'center' });
  }

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-black dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>CitruSoft</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-customYellow focus:text-customYellow">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navbar.navigation.map((item) => (
                      <button onClick={handleClick} value={item} key={item} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </button>
                    ))}
                    <button onClick={handleClick} className="w-full px-6 py-2 mt-3 text-center text-white bg-customYellow rounded-md lg:ml-5">         
                        {navbar.button}
                    </button>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navbar.navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                   <button onClick={handleClick} value={item} key={item} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300  focus:outline-none">
                          {item}
                    </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <button onClick={handleClickContact} className="px-6 py-2 text-white bg-customYellow rounded-md md:ml-5">
          {navbar.button}
          </button>
          {
              language === 'es' ? (
                <Image
                  src="https://flagcdn.com/es.svg"
                  alt="es"
                  width="52"
                  height="32"
                  onClick={() => changeLanguage('en')}
                />
              ):
              (
                <Image
                  src="https://flagcdn.com/gb.svg"
                  alt="en"
                  width="52"
                  height="32"
                  onClick={() => changeLanguage('es')}
                />
              )
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
