export default function section1() {
  const bg ={
    background:"url('/images/edited.png')no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    height:"600px",
    marginTop:"20px"

  }
  return(
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-7xl pb-6 text-center text-blue-900">Explore</h1>
      </div>
      <div className="container mx-auto my-auto md:px-16">
        <h3 className="font-bold text-7xl text-center text-sky-900">The Beauty of Nepal</h3>
      </div>
      <div className=" mt-20">
        <div className="container mx-auto md:px-20  text-center">
          <p className="font-semibold text-xl text-sky-900">Search your next destination</p>
          <div className="py-4">
            <input type={"text"} className="shadow border rouned w-9/12 py-3 px-3 text-gray-700 focus:outilne-none focus:shadow-outiline" placeholder="Enter your destination">
            </input >
          </div>
          <button className="bg-sky-900 px-20 py-3 rounded-full text-gray-50 text-l hover:bg-sky-500">
            Search
          </button>
        </div>

      </div>

    </section>
  )
}

