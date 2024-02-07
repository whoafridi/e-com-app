import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative md:flex table w-full items-center md:h-screen py-36 bg-[url('https://shreethemes.in/cartzio/layouts/assets/images/hero/bg4.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/50 from-slate-900/90"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 justify-center">
          <div className="text-center">
            <span className="uppercase font-semibold text-lg text-white">
              Top Collection
            </span>
            <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold text-white my-3">
              Shine Bright
            </h4>
            <p className="text-lg text-white/70">
              Our latest collection of essential basics.
            </p>
            <div className="mt-6">
              <Link
                href="/products"
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange-500 rounded-md"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
