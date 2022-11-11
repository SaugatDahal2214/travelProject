export default function section3() {
  const bg1 ={
    background:"url('/images/last5.png')no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    height:"400px",
    marginTop:"20px"

  }
  return(
    <section className="py-16" style={bg1}>
      
           <div className=" mt-20">
        <div className="container mx-auto md:px-20  text-right">
          <p className="font-bold text-7xl text-blue-50 pb-7 text-right mt-10">It's Your Time for Adventure</p>
          <button className="bg-sky-900 px-20 py-3 rounded-full text-gray-50 text-l hover:bg-sky-500">
            Explore
          </button>
        </div>

      </div>
    </section>
  )
}

