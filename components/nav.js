import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="ml:10 flex items-baseline space-x-16 bg-sky-200 justify-center ">
          <Link
            href="/"
            activeClass="Home"
            to="home"
            className="curosr-pointer text-blue-900 font-semibold px-3 py-2 text-md hover:font-black font-sans "
          >
            Home{" "}
          </Link>
          <Link
            activeClass="About"
            to="about"
            href="/"
            className="curosr-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 font-sans "
          >
            About Us
          </Link>
          <Link
            activeClass="Gallery"
            to="gallery"
            href="/"
            className="curosr-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 font-sans "
          >
            Gallery
          </Link>
          <Link
            activeClass="Services"
            to="services"
            href="/"
            className="curosr-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 font-sans "
          >
            Services
          </Link>
          <Link
            activeClass="Contact Us"
            to="contact"
            href="/"
            className="curosr-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 font-sans "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
