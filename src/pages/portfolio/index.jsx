/* eslint-disable @next/next/no-img-element */
import Meta from "@/components/Meta";
import MainLayout from "@/layouts/Main";
import { useRouter } from "next/router";

export default function Portfolio() {
  const router = useRouter();
  const projects = [
    {
      img: "/portfolio/mandakiro.png",
      name: "MANDAKIRO",
      position: "Backend Developer",
      url: "https://mandakiro.com",
      date: 1638291600000,
    },
    {
      img: "/portfolio/ng-global-citizens.png",
      name: "NG GLOBAL CITIZENS",
      position: "Frontend Developer",
      url: "https://ngglobalcitizens.com",
      date: 1640970000000,
    },
    {
      img: "/portfolio/mss.png",
      name: "MITRA SISTEM SINERGI",
      position: "Backend & Frontend Developer",
      url: "https://mitrasistemsinergi.com",
      date: 1643648400000,
    },
    {
      img: "/portfolio/indotrans.png",
      name: "PT Indotrans Jaya Nusantara",
      position: "Backend Developer",
      url: "https://indotransjayanusantara.com",
      date: 1646067600000,
    },
    {
      img: "/portfolio/acp-indonesia.png",
      name: "ACP INDONESIA",
      position: "Backend Developer",
      url: "https://www.acp-indonesia.com",
      date: 1646154000000,
    },
    {
      img: "/portfolio/chococandy-bekasi.jpeg",
      name: "Chococandy Bekasi",
      position: "Backend Developer",
      url: "https://chococandybekasi.com",
      date: 1656608400000,
    },
    {
      img: "/portfolio/nsi.jpeg",
      name: "PT NOBEL SERTIFIKASI INDONESIA",
      position: "Backend Developer",
      url: "https://www.nsicertification.com",
      date: 1659286800000,
    },
    {
      img: "/portfolio/crown.jpeg",
      name: "PT. Crown Certification Indonesia",
      position: "Backend Developer",
      url: "https://crowncertindo.com",
      date: 1659373200000,
    },
    {
      img: "/portfolio/ssi.jpeg",
      name: "PT. SENTRAL SISTEM INDONESIA",
      position: "Backend Developer",
      url: "https://sentralsistemindonesia.com",
      date: 1661965200000,
    },
    {
      img: "/portfolio/simapan.jpeg",
      name: "SIMAPAN & SPH Kabupaten Tangerang",
      position: "Backend Developer",
      url: "https://simapan.tangerangkab.go.id",
      date: 1669827600000,
    },
    {
      img: "/portfolio/lunaticastore.jpeg",
      name: "Lunatica Store",
      position: "Frontend Developer",
      date: 1696093200000,
    },
    {
      img: "/portfolio/paragraphics-co.jpeg",
      name: "Paragraphics Co",
      position: "Frontend Developer",
      url: "https://paragraphics.co",
      date: 1698771600000,
    },
    {
      img: "/portfolio/pkm-bumdescimacan.png",
      name: "PKM Bumdes Cimacan",
      position: "Mentor, Tester, and Project Manager",
      url: "https://pkm-bumdescimacan.com",
      date: 1698858000000,
    },
    {
      img: "/portfolio/presences.png",
      name: "REALTIME PRESENCES",
      position: "Full Stack Developer",
      date: 1635699600000,
    },
    {
      img: "/portfolio/ruangame.png",
      name: "RuanGame by SySafarila",
      position: "Full Stack Developer",
      url: "https://www.ruangame.biz.id",
      date: 1711904400000,
    },
    {
      img: "/portfolio/react-pwa.png",
      name: "React PWA",
      position: "Frontend Developer - Tugas Kampus",
      url: "https://pwa-convertions.sysafarila.my.id",
      date: 1706720400000,
    },
    {
      img: "/portfolio/js-paginate.png",
      name: "JS-Paginate (Package)",
      position: "A pagination generator for JavaScript with Median",
      url: "https://www.npmjs.com/package/@sysafarila/js-paginate",
      date: 1711904400000,
    },
  ];

  projects.sort((a, b) => {
    return a.date - b.date;
  });

  const months = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const goToProject = (url) => {
    if (url) {
      return router.push(url);
    }
  };

  const generateDate = (raw_date) => {
    const raw = new Date(raw_date);
    const date = raw.getDate();
    const month = raw.getMonth();
    const year = raw.getFullYear();
    return `${date} ${months[month]} ${year}`;
  };

  return (
    <MainLayout>
      <Meta
        title="Portfolio | Syahrul Safarila"
        description="Develop some website with React as javascript library, Tailwind as CSS framework, and Laravel as PHP framework"
        image="https://i.pinimg.com/originals/1c/09/36/1c0936c9e5cd191312bcdc8216db9c08.jpg"
      />
      <main className="dark:text-gold-1 dark:text-opacity-80 flex flex-col gap-y-5 items-center main-landing-page-2 p-5 text-gray-600">
        <div className="flex flex-col gap-y-5 max-w-screen-md w-full">
          <h1 className="dark:text-gold-1 font-extrabold font-family-Montserrat text-2xl text-gray-800 tracking-widest uppercase">
            Portfolio
          </h1>
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col justify-center gap-2">
                <p className="capitalize font-semibold">
                  {generateDate(project.date)}
                </p>
                <div className="group overflow-hidden relative rounded-md shadow-md w-full h-full bg-white">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="h-full object-center object-contain w-full"
                  />
                  <div
                    className={`absolute backdrop-blur-sm backdrop-filter bg-black bg-opacity-60 flex flex-col font-family-Montserrat group-hover:opacity-100 inset-0 items-center justify-center opacity-0 text-gray-100 transition-all px-3 ${
                      project.url ? "cursor-pointer" : "cursor-default"
                    }`}
                    onClick={() => goToProject(project.url)}
                  >
                    <h2 className="font-extrabold tracking-widest text-center text-pretty">
                      {project.name}
                    </h2>
                    <h3 className="font-normal text-sm">{project.position}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
