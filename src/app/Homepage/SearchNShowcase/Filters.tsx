import Image from 'next/image';
import { type FC as ReactFC } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Tag from '@/components/Tag';

import ColletionIcon from '@/assets/icons/menu/collection.svg';
import ProvisionIcon from '@/assets/icons/menu/providers.svg';

import { IFilters } from './Search.types';

const Filters: ReactFC<IFilters> = ({ tagsList, activeTag, setActiveTag }) => {
  return (
    <div className="flex gap-2.5 overflow-x-scroll md:overflow-x-auto">
      {tagsList.map(({ id, name, icon }) => (
        <Tag
          key={id}
          data={{ id, name, icon }}
          className={id === activeTag ? 'bg-primary text-foreground' : ''}
          onClick={({ id, name }) => {
            alert(`Tag ID#${id}, Named: ${name}, clicked`);
            setActiveTag(id);
          }}
        />
      ))}
      <Select>
        <SelectTrigger className="h-[46px] w-[180px] border border-tag-border bg-primary px-1 py-2.5">
          <Image src={ColletionIcon} width={24} height={24} alt="collections" />
          <SelectValue placeholder="Collections" />
        </SelectTrigger>
        <SelectContent className="border border-tag-border bg-primary">
          <SelectItem value="1">Collection 1</SelectItem>
          <SelectItem value="2">Collection 2</SelectItem>
          <SelectItem value="3">Collection 3</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="h-[46px] w-[180px] border border-tag-border bg-primary px-1 py-2.5">
          <Image src={ProvisionIcon} width={24} height={24} alt="provisions" />
          <SelectValue placeholder="Provisions" />
        </SelectTrigger>
        <SelectContent className="border border-tag-border bg-primary">
          <SelectItem value="1">Provision 1</SelectItem>
          <SelectItem value="2">Provision 2</SelectItem>
          <SelectItem value="3">Provision 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
