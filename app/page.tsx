import { Hero, SearchBar, CustomFilter } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar></SearchBar>
          <div className="home__filter-container">
            <CustomFilter title="fuel"></CustomFilter>
            <CustomFilter title="year"></CustomFilter>
          </div>
        </div>
      </div>
    </main>
  );
}
