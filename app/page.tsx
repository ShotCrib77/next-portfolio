import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="w-full my-24">
      <div className="w-3/4 flex flex-col mx-auto">

        <div className="mx-auto mb-12">
          <h1 className="text-3xl font-bold">Projects</h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-wrap gap-4 items-stretch justify-center">
            <ProjectCard
              projectName="DuLOLytics"
              projectDescription='A casual and fun tool to see how "compatible" you are with your duo, by getting an overview of your stats together. Stats are fetched from Riot API!'
              imgSrc="/dulolytics.png"
              techStack={[
                "https://img.shields.io/badge/Riot-D32936?logo=riotgames&logoColor=white",
                "https://img.shields.io/badge/Redis-FF4438?logo=redis&logoColor=white",
                "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white",
                "https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white",
                "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white",
                "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white",
              ]}
              githubUrl="https://github.com/ShotCrib77/dulolytics"
              websiteUrl="https://dulolytics.shotcrib.com"
            />
            <ProjectCard
              projectName="Courtside"
              projectDescription="A full-stack court booking system for tennis, badminton and padel with role-based admin access, booking management and a stats dashboard."
              imgSrc="/courtside.png"
              techStack={[
                "https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white",
                "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white",
                "https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white",
                "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white",
                "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white",
              ]}
              githubUrl="https://github.com/ShotCrib77/sports-hall-booking-system"
              websiteUrl="https://courtside.shotcrib.com"
            />
            <ProjectCard
              projectName="Kentle"
              projectDescription="A music quiz app with Kent theme. Playback integrated with Spotify Web playback SDK."
              imgSrc="/kentle.png"
              techStack={[
                "https://img.shields.io/badge/Spotify-1DB954?logo=spotify&logoColor=white",
                "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white",
                "https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white",
                "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white",
                "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white",
              ]}
              githubUrl="https://github.com/ShotCrib77/kentle-2026"
              websiteUrl="https://kentle.shotcrib.com"
            />

            <ProjectCard
              projectName="Tic Tac Toe with Websocket"
              projectDescription="A real-time multiplayer Tic-Tac-Toe game using WebSockets."
              imgSrc="/tictactoe.png"
              techStack={[
                "https://img.shields.io/badge/Socket.io-010101?logo=socketdotio&logoColor=white",
                "https://img.shields.io/badge/Express-000000?logo=express&logoColor=white",
                "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white",
                "https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white",
                "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white",
                "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white",
              ]}
              githubUrl="https://github.com/ShotCrib77/websockets-tic-tac-toe"
              websiteUrl="https://tictactoe.shotcrib.com"
            />
          </div>
  
        </div>

      </div>
    </main>
  );
}
