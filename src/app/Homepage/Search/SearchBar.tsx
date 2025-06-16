'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';

import SearchIcon from '@/assets/icons/search.svg';
import Image from 'next/image';

const SearchBar = () => {
  const [searhTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default SearchBar;
