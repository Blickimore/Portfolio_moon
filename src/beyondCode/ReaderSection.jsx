import { Link } from "react-router-dom";
import "@fontsource/cormorant-garamond";
import lib1 from "../assets/lib1.jpg";
import trc from "../assets/TRC_BC.jpg";
import wolves from "../assets/wolves.jpg";
import bfb from "../assets/BFB_BC.jpg";
import ps from "../assets/PS_BC.jpg";
import atss from "../assets/ATSS_BC.jpg";
export default function ReaderSection() {
  const books = [
  {
    title: "The Remnant Chronicles",
    author: "Mary E. Pearson",
    cover: trc,
  },

  {
    title: "Wolves of Mercy Falls",
    author: "Maggie Stiefvater",
    cover: wolves,
  },

  {
    title: "Blood For Blood",
    author: "Catherine Doyle",
    cover: bfb,
  },

  {
    title: "P.S. I Love You",
    author: "Cecelia Ahern",
    cover: ps,
  },

  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    cover: atss,
  },
];

  const quotes = [
    "It can take years to mold a dream. It takes only a fraction of a second for it to be shattered.",

    "Maybe there were as many shades of love as the blues of the sky.",

    "If one can't be trusted in love, one can't be trusted in anything.",

    "Don't be afraid to fall in love again. Open your heart and follow where it leads you.",

    "To live is the rarest thing in the world. Most people exist, that's all.",
  ];

  return (
    <div className="min-h-screen bg-[#210207] text-[#f5e6df] overflow-hidden relative">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,#730c1e40,transparent_60%)]"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#480415]/30 rounded-full blur-3xl"></div>

      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#730c1e]/20 rounded-full blur-3xl"></div>

      {/* Floating Glow Particles */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* HERO SECTION */}
      <section
  className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative bg-cover bg-center"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(20,15,23,0.82),
        rgba(33,2,7,0.88)
      ),
      url(${lib1})
    `,
  }}
>

        <Link
          to="/beyond-code"
          className="absolute top-10 left-10 text-[#d7b5b5] text-sm tracking-widest hover:text-white transition"
        >
          ← Back To Beyond The Code
        </Link>

        <p className="uppercase tracking-[10px] text-xs text-[#d7b5b5] mb-10">
          The Reader In Me
        </p>

        <h1 className="max-w-4xl text-2xl md:text-5xl leading-[1.4] font-['Cormorant_Garamond'] font-semibold tracking-wide text-[#f7e3da] drop-shadow-2xl">
          “I have lived a thousand lives
          <br />
          and loved a thousand loves.
          <br />
          I have walked on distant lands
          <br />
          and seen the end of time
          <br />
          because I read.”
        </h1>

        <div className="w-40 h-[1px] bg-[#d7b5b560] my-12"></div>

        <p className="max-w-2xl text-[#d7b5b5] text-sm md:text-lg leading-9">
          Stories have always been more than stories to me.
          They became worlds I escaped into, people I carried
          with me, and emotions that stayed long after the final page.
        </p>

      </section>

      {/* LIBRARY SECTION */}
      <section className="py-32 px-6 relative">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-6xl font-serif mb-5 text-[#f5ddd5]">
            The Library Hall
          </h2>

          <p className="text-[#caa6a6] text-sm md:text-lg">
            The stories that left permanent fingerprints on my soul.
          </p>

        </div>

        {/* Bookshelf */}
        <div className="max-w-7xl mx-auto relative">

          <div className="absolute inset-0 bg-[#140f17]/60 rounded-[40px] blur-xl"></div>

          <div className="relative bg-[#2a120f]/80 border border-[#ffffff10] rounded-[40px] p-10 overflow-hidden backdrop-blur-xl">

            {/* Shelf Wood */}
            <div className="grid md:grid-cols-5 gap-6 relative z-10">

              {books.map((book, index) => (
                <div
                  key={index}
                  className="group relative h-[350px] rounded-t-[25px] rounded-b-[10px] bg-gradient-to-b from-[#730c1e] via-[#480415] to-[#210207] border border-[#ffffff10] overflow-hidden hover:-translate-y-5 hover:rotate-1 transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#ffffff05] opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <img
                src={book.cover}
                alt={book.title}
                className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 p-6 z-10">

                    <h3 className="text-2xl leading-snug font-serif mb-3 text-[#f7e3da]">
                      {book.title}
                    </h3>

                    <p className="text-[#d6aaaa] text-sm">
                      {book.author}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FLYING QUOTES */}
      <section className="py-40 px-6 relative overflow-hidden">

        <div className="text-center mb-24">

          <h2 className="text-4xl md:text-6xl font-serif mb-5">
            Words That Stayed
          </h2>

          <p className="text-[#caa6a6] text-sm md:text-lg">
            Some lines never leave you.
          </p>

        </div>

        <div className="max-w-7xl mx-auto relative h-[900px]">

          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`
                absolute
                bg-[#f5e6df]
                text-[#210207]
                w-[280px]
                p-8
                rounded-[8px]
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                rotate-${index % 2 === 0 ? "[-6deg]" : "[6deg]"}
                hover:scale-105
                transition-all
                duration-500
              `}
              style={{
                top: `${index * 120}px`,
                left: `${(index % 2) * 45 + 10}%`,
              }}
            >

              <p className="italic leading-8 text-lg font-serif">
                “{quote}”
              </p>

            </div>
          ))}

          {/* Floating Books */}
          <div className="absolute top-20 right-20 text-7xl opacity-20 animate-bounce">
            📖
          </div>

          <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-pulse">
            📚
          </div>

        </div>

      </section>

      {/* ATMOSPHERE */}
      {/* ATMOSPHERE */}
<section className="py-40 px-6 relative overflow-hidden">

  <div className="max-w-6xl mx-auto relative h-[700px] flex items-center justify-center">

    {/* Center Circle */}
    <div className="absolute w-[320px] h-[320px] rounded-full border border-[#ffffff15] bg-[#480415]/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(0,0,0,0.5)]">

      <div className="text-center px-8">

        <h2 className="text-4xl md:text-5xl font-serif text-[#f7e3da] mb-6">
          Reading
          <br />
          Atmosphere
        </h2>

        <p className="text-[#d7b5b5] text-sm leading-8">
          The little things that make reading
          feel like magic.
        </p>

      </div>

    </div>

    {/* Floating Atmosphere Words */}

    <div className="absolute top-[5%] left-[42%] bg-[#730c1e]/30 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Rainy Nights
    </div>

    <div className="absolute top-[22%] right-[10%] bg-[#480415]/40 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Quiet Music
    </div>

    <div className="absolute bottom-[22%] right-[12%] bg-[#730c1e]/30 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Candles
    </div>

    <div className="absolute bottom-[5%] left-[40%] bg-[#480415]/40 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Coffee & Silence
    </div>

    <div className="absolute bottom-[25%] left-[8%] bg-[#730c1e]/30 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Midnight Reading
    </div>

    <div className="absolute top-[25%] left-[10%] bg-[#480415]/40 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Warm Lamps
    </div>

    <div className="absolute top-[48%] right-[2%] bg-[#730c1e]/30 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Fantasy Worlds
    </div>

    <div className="absolute top-[48%] left-[0%] bg-[#480415]/40 border border-[#ffffff10] px-8 py-4 rounded-full backdrop-blur-lg text-[#f7e3da] hover:scale-110 transition duration-500">
      Annotated Pages
    </div>

  </div>

</section>

      {/* END SECTION */}
      <section className="py-40 px-6 text-center relative">

        <div className="absolute inset-0 bg-gradient-to-t from-[#140f17] to-transparent"></div>

        <div className="relative z-10">

          <p className="text-3xl md:text-5xl italic font-serif text-[#f3d6d0] mb-16">
            “A reader lives a thousand lives before he dies.”
          </p>

          <Link
            to="/beyond-code"
            className="inline-block px-10 py-5 border border-[#ffffff20] rounded-full bg-[#730c1e]/40 backdrop-blur-lg hover:bg-[#730c1e] transition-all duration-500 text-lg"
          >
            Return To Beyond The Code
          </Link>

        </div>

      </section>

    </div>
  );
}