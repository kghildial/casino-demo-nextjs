'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';

import SearchIcon from '@/assets/icons/search.svg';
import Image from 'next/image';
import Filters from './Filters';

import { tagsList } from './seedData';

const SearchBar = () => {
  const [searhTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('');

  return (
    <div className="mb-5 flex flex-col">
      {/* Search Bar */}
      <div className="mb-4 flex rounded-md border border-border bg-primary px-3 py-2">
        <Image src={SearchIcon} width={24} height={24} alt="Search" />
        <Input
          type="string"
          placeholder="Search your game"
          value={searhTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border-none"
        />
      </div>

      <Filters tagsList={tagsList} activeTag={activeTag} setActiveTag={setActiveTag} />
    </div>
  );
};

export default SearchBar;
