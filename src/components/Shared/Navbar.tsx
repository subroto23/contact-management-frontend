import Link from "next/link";
import Container from "../ui/Container/Container";

const Navbar = () => {
  return (
    <div className="text-white body-font z-[5555] bg-purple-500 sticky top-0">
      <Container>
        <div className="mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Contact</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/contacts"} className="mr-5 hover:text-gray-200">
              All Contacts
            </Link>
            <Link href={"/add-contact"} className="mr-5 hover:text-gray-200">
              Add Contacts
            </Link>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
