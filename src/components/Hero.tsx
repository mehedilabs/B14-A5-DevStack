import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-50">
     <div className="mx-auto grid max-w-7xl items-center gap-0 px-4 py-16 md:grid-cols-2 md:gap-10 md:py-24">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Build Your Ideal

            <br />
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-600 mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options,<br className="hidden md:block"/>
            compare them side by side, and put together the stack that fits<br className="hidden md:block"/> your
            next project.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#technologies"
              className="brand-gradient rounded-2xl px-6 py-3 font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-2xl border border-gray-300 px-6 py-3 text-\[\#374151\]">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="#"
            className="w-full max-w-lg translate-x-0 md:translate-x-14"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;