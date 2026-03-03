import CategoryGroup from "./components/CategoryGroup";
import PageLink from "./components/PageLink";

export default function Home() {
  return (
    <main className="w-full min-h-screen my-24">
      <div className="w-3/4 flex flex-col mx-auto">

        <div className="mx-auto mb-12">
          <h1 className="text-3xl">Projects</h1>
        </div>

        <div>
          <CategoryGroup header="Games">
            <PageLink
              link="https://tictactoe.shotcrib.com"
              imgSrc="/tictactoe.png"
              name={"Tic Tac Toe \n(Websockets)"}
            />
            <PageLink
              link="https://kentle.shotcrib.com"
              imgSrc="/kentle.png"
              name={"Kentle \n(Music Quiz)"}
            />
          </CategoryGroup>
  
        </div>

      </div>
    </main>
  );
}
