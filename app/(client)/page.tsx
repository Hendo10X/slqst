import Hero from "../components/Hero";
import Newest from "../components/Newest";


export default function Home() {
  return (
    <div className="mx-auto p-6 sm:p-8 lg:p-12">
      <Hero />
      <Newest />
    </div>
  );
}
