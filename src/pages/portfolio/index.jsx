/* eslint-disable @next/next/no-img-element */
import Meta from "@/components/Meta";
import MainLayout from "@/layouts/Main";

export default function Portfolio() {
  const projects = [
    {
      img: "/portfolio/mandakiro.png",
      name: "MANDAKIRO",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/ng-global-citizens.png",
      name: "NG GLOBAL CITIZENS",
      position: "Frontend Developer",
    },
    {
      img: "/portfolio/mss.png",
      name: "MITRA SISTEM SINERGI",
      position: "Backend & Frontend Developer",
    },
    {
      img: "/portfolio/indotrans.png",
      name: "PT Indotrans Jaya Nusantara",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/acp-indonesia.png",
      name: "ACP INDONESIA",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/chococandy-bekasi.jpeg",
      name: "Chococandy Bekasi",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/nsi.jpeg",
      name: "PT NOBEL SERTIFIKASI INDONESIA",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/crown.jpeg",
      name: "PT. Crown Certification Indonesia",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/ssi.jpeg",
      name: "PT. SENTRAL SISTEM INDONESIA",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/simapan.jpeg",
      name: "SIMAPAN & SPH Kabupaten Tangerang",
      position: "Backend Developer",
    },
    {
      img: "/portfolio/lunaticastore.jpeg",
      name: "Lunatica Store",
      position: "Frontend Developer",
    },
    {
      img: "/portfolio/paragraphics-co.jpeg",
      name: "Paragraphics Co",
      position: "Frontend Developer",
    },
    {
      img: "/portfolio/pkm-bumdescimacan.png",
      name: "PKM Bumdes Cimacan",
      position: "Mentor, Tester, and Project Manager",
    },
    {
      img: "/portfolio/presences.png",
      name: "REALTIME PRESENCES",
      position: "Full Stack Developer",
    },
    {
      img: "/portfolio/ruangame.png",
      name: "RuanGame by SySafarila",
      position: "Full Stack Developer",
    },
  ];
  return (
    <MainLayout>
      <Meta
        title="Portfolio | Syahrul Safarila"
        description="Developing some website with React as javascript library, Tailwind CSS as CSS framework, and Laravel as backend's framework"
        image="https://i.pinimg.com/originals/1c/09/36/1c0936c9e5cd191312bcdc8216db9c08.jpg"
      />
      <main className="dark:text-gold-1 dark:text-opacity-80 flex flex-col gap-y-5 items-center main-landing-page-2 p-5 text-gray-600">
        <div className="flex flex-col gap-y-5 max-w-screen-md w-full">
          <h1 className="dark:text-gold-1 font-extrabold font-family-Montserrat text-2xl text-gray-800 tracking-widest uppercase">
            Portfolio
          </h1>
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                className="group overflow-hidden relative rounded-md shadow-md w-full"
                key={index}
              >
                <img
                  src={project.img}
                  alt="acp-indonesia"
                  className="h-full object-center object-contain w-full"
                />
                <div className="absolute backdrop-blur-sm backdrop-filter bg-black bg-opacity-60 cursor-default flex flex-col font-family-Montserrat group-hover:opacity-100 inset-0 items-center justify-center opacity-0 text-gray-100 transition-all">
                  <h2 className="font-extrabold tracking-widest">
                    {project.name}
                  </h2>
                  <h3 className="font-normal text-sm">{project.position}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
