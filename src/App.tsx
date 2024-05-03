import { useScrollSnap } from './hooks/useScrollSnap'

export const App = () => {
  const { outerDivRef, currentPage } = useScrollSnap()

  return (
    <div ref={outerDivRef} className="h-[100vh] overflow-y-auto">
      <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
        <img
          src="your-image-url.jpg"
          alt="Nature background"
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        />
        <div className="z-10 p-5 text-center">
          <h1 className="text-4xl font-bold mb-3">Welcome to Glint</h1>
          <p className="text-xl mb-5">
            We are a creative group of people who design influential brands and
            digital experiences.
          </p>
          <button className="bg-transparent border border-white py-2 px-4 mr-2">
            Start a Project
          </button>
          <button className="bg-transparent border border-white py-2 px-4">
            More About Us
          </button>
        </div>
        <div className="absolute right-10 top-10 flex flex-col items-center space-y-3">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-white text-lg"
          >
            F
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-white text-lg"
          >
            T
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-white text-lg"
          >
            I
          </a>
        </div>
        <div className="absolute bottom-5 left-5 text-sm">Scroll Down</div>
      </div>
      <div className="h-[5px] w-[100%] bg-gray-50"></div>
      <div className="h-[100vh] flex justify-center items-center">2</div>
      <div className="h-[5px] w-[100%] bg-gray-50"></div>
      <div className="h-[100vh] flex justify-center items-center">3</div>
    </div>
  )
}
