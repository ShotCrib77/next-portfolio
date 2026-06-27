import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="w-full my-24">
      <div className="w-3/4 flex flex-col mx-auto gap-8">
        <section className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-zinc-500">
            Stockholm
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Wilmer
          </h1>
        </section>

        <div className="mx-auto text-center mt-4">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Projects</h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-wrap gap-4 items-stretch justify-center">
            <ProjectCard
              projectName="DuLOLytics"
              projectDescription={`A casual and fun tool to see how "compatible" you are with your duo, by getting an overview of your stats together. Stats are fetched from the Riot API!\n\nThis was coincidentally a great project to learn Redis with. It helps a lot for this website by not refetching the Riot API, which has a really harsh rate limit. And is also great since games with multiple duos will only ever be fetched once even when both duos look for the stats of the same game.`}
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
              projectDescription={`A full-stack court booking system for tennis, badminton and padel.\n\nOne of my more technically complex sites with custom JWT auth, role-based admin access enforced at a database level, booking management, stats dashboard, a nifty solution for cancelled bookings and more.`}
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
              projectDescription={`A music quiz app with Kent theme. Playback integrated with Spotify Web playback SDK.\n\nA big passion project for me that I've made 4 diffrent, increasingly better versions of through out the past 2 years. Always been a huge fan of Kent and when I discovered that there were no kent-themed music quiz, I decided to make one myself.\n\nNote: Spotify's API is very restrictive and therefore you need to be whitlisted to be able to use it, feel free to email me if you want to try it!`}
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
              projectName="Chinese lyrics app"
              projectDescription={`A website that let's you translate chinese song lyrics into pinyin and english and let's user toggle what languages to display.\n\nA tiny personal tool for me to have a library of the pinyin lyrics of a lot of the chinese song I like. Also a helpful tool to help me along the way of learning mandarin.`}
              imgSrc="/lyrics.png"
              techStack={[
                "https://img.shields.io/badge/Postgres-316192?logo=postgresql&logoColor=white",
                "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white",
                "https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white",
                "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white",
                "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white",
              ]}
              githubUrl="https://github.com/ShotCrib77/chinese-lyrics-app"
              websiteUrl="https://lyrics.shotcrib.com"
            />
            <ProjectCard
              projectName="Golang Load Tester"
              projectDescription={`A simple CLI load testing tool built with Golang.\n\nWanted a tool to be able to simulate traffic to my own server, and was curious about Golang. This was the perfect project to combine both!`}
              imgSrc="/load-tester-output.png"
              techStack={[
                "https://img.shields.io/badge/Golang-00ADD8?logo=go&logoColor=white",
              ]}
              githubUrl="https://github.com/ShotCrib77/go-load-tester"
            />
            <ProjectCard
              projectName="Tic Tac Toe with Websocket"
              projectDescription={`A real-time multiplayer Tic-Tac-Toe game using WebSockets.\n\nWanted a simple and fun project to learn websockets. Tic-tac-toe was that, as well as a project that I could actually share and play with friends!`}
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