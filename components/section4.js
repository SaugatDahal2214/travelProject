import Link from "next/link";

import Image from 'next/image';

export default function section4() {
  return (
    <section className="container mx-auto md:px-16 py-10">
        <h1 className="font-bold text-4xl pt-3 pb-10 text-center text-blue-900">Featured Trips</h1>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-14">

            {Post1()}
            {Post2()}
       </div>

    </section>
  );
}

function Post1(){
    return(
        <div className="item pl-16">
            <div className="images">
                <Link href={"/"}><Image src={"/images/annapurna2.jpg"} className="rounded hover:opacity-75" width={400} height={150}/></Link>
                

            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} ><h3 className=" text-2xl text-blue-900 hover:text-sky-500 text-semibold">Annapurna Circuit</h3></Link>
                    <p className="text-l font-semibold text-sky-900">
                        03-12 person per group
                    </p>

                </div>

            </div>

        </div>
    )
}
function Post2(){
    return(
        <div className="item pl-16">
            <div className="images">
                <Link href={"/"}><Image src={"/images/manaslu2.jpg"} className="rounded hover:opacity-75" width={400} height={150}/></Link>
                

            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} ><h3 className="text-left text-2xl text-blue-900 hover:text-sky-500 text-semibold">Manaslu Expeniture</h3></Link>
                    <p className="text-l font-semibold text-sky-900">
                        03-8 person per group
                    </p>

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