import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, MY NAME IS CHRIS ISAAC NEPOMUCENO.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            From sleek, modern websites to dynamic, scalable applications, I
            bring your ideas to life with precision and passion. Let’s create
            something incredible together — tailored just for your needs and
            vision.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 text-white hover:text-black rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/322862852_5820407464720237_8950054786359414505_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHFtJkXPML4Y0YJmeam9fZnCv64MQQ0TtoK_rgxBDRO2nsUuCjvbEKvPGEE6ffwGk-Xv6V3oUT3CsQGYFXh69l6&_nc_ohc=LG0EI9yWrakQ7kNvgELx2Ge&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&_nc_gid=A3cALBLuAkamBe3pFZ2t_Tg&oh=00_AYC5iJ5JcIwhJe5Scp3LyhgtoF9NTxzipkMmknP6KP8i-A&oe=673E3A28"
          />
        </div>
      </div>
    </section>
  );
}