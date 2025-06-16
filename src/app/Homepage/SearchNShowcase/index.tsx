import Showcase from '@/widgets/Showcase';
import SearchBar from './SearchBar';

import { featured, newReleases, hotGames, bonusPlay, liveGames, providers } from './seedData';

const SearchNShowcase = () => {
  return (
    <div className="mt-5 flex flex-col">
      <SearchBar />
      <Showcase title={featured.title} data={featured.data} />
      <Showcase title={newReleases.title} data={newReleases.data} />
      <Showcase title={hotGames.title} data={hotGames.data} />
      <Showcase title={bonusPlay.title} data={bonusPlay.data} />
      <Showcase title={liveGames.title} data={liveGames.data} />
      <Showcase title={providers.title} data={providers.data} />
    </div>
  );
};

export default SearchNShowcase;
