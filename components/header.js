import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function header() {
  return (
    <header className="bg-sky-100">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        {" "}
        {/*Breakpoint applied. Container applied only above the breakpoint"*/}
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search" />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link
            href={"/"}
            className=" font-bold uppercase text-2xl text-blue-900"
          >
            Horizon Expedition
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <a>
              {" "}
              <FaFacebook color="10629D" />
            </a>
            <a>
              {" "}
              <FaTwitter color="10629D" />
            </a>
            <a>
              {" "}
              <FaInstagram color="10629D" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
