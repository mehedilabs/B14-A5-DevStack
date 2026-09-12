import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-16">

          <div className="text-center lg:col-span-2 lg:text-left">
          
            <img
              src={Logo}
              alt="Dev Stack"
              className="mx-auto h-auto w-auto lg:mx-0"
            />
            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-gray-500 lg:mx-0">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex items-center justify-center gap-5 text-sm font-medium text-gray-700 lg:justify-start">

              <a href="#"
                className="transition-colors hover:text-gray-950">
                GitHub
               </a>
              <span className="text-gray-300">•</span>
              <a
                href="#"
                className="transition-colors hover:text-gray-950"
              >
                Twitter
              </a>

              <span className="text-gray-300">•</span>
              <a
                href="#"
                className="transition-colors hover:text-gray-950"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <a
                href="#"
                className="block transition-colors hover:text-gray-900"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block transition-colors hover:text-gray-900"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="block transition-colors hover:text-gray-900"
              >
                Projects
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <a
                href="#about"
                className="block transition-colors hover:text-gray-900"
              >
                About
              </a>

              <a
                href="#contact"
                className="block transition-colors hover:text-gray-900"
              >
                Contact
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-gray-900"
              >
                Careers
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <a
                href="#"
                className="block transition-colors hover:text-gray-900"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-gray-900"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-400">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors hover:text-gray-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-gray-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;