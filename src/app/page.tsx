import LoadMore from "../components/LoadMore";
import TestCards from "../components/TestCards";

async function Home() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="">
        <TestCards />
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
