import { type FC as ReactFC } from 'react';

import Tag from '@/components/Tag';

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
    </div>
  );
};

export default Filters;
