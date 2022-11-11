import Link from "next/link";

import Image from 'next/image';

export default function section2() {
  return (
    <section className="container mx-auto md:px-16 py-10">
        <h1 className="font-bold text-4xl pt-3 pb-10 text-center text-blue-900">Services</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 pl-16 ">

            {Post1()}
            {Post2()}
            {Post3()}
            {Post4()}
        </div>

    </section>
  );
}

function Post1(){
    return(
        <div className="item">
            <div className="images">
                <Link href={"/"}><Image src={"/images/download.png"} className="rounded" width={150} height={250}/></Link>
                

            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} ><h3 className="px-5 text-2xl text-blue-900 hover:text-sky-500 text-semibold">Expedition</h3></Link>

                </div>

            </div>

        </div>
    )
}
function Post2(){
    return(
        <div className="item pl-6">
            <div className="images">
                <Link href={"/"}><Image src={"/images/Peak climbing.png"} className="rounded" width={92} height={250}/></Link>
                

            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} ><h3 className="text-left text-2xl text-blue-900 hover:text-sky-500 text-semibold">Climbing</h3></Link>

                </div>

            </div>

        </div>
    )
}
function Post3(){
    return(
        <div className="item pl-6">
            <div className="images">
                <Link href={"/"}><Image src={"/images/Trekking (2).png"} className="rounded" width={120} height={250}/></Link>
                

            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} ><h3 className="px-5 text-2xl text-blue-900 hover:text-sky-500 text-semibold">Trekking</h3></Link>

                </div>

            </div>

        </div>
    )
}
function Post4(){
    return(
        <div className="item pl-6">
            <div className="images">
                <Link href={"/"}><Image src={"/images/Tour.png"} className="rounded" width={90} height={250}/></Link>
                

            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} ><h3 className="px-7 text-2xl text-blue-900 hover:text-sky-500 text-semibold">Tours</h3></Link>

                </div>

            </div>

        </div>
    )
}