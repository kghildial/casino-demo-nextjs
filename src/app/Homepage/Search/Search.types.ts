import { ITagData } from '@/components/Tag/Tag.types';
import { Dispatch, SetStateAction } from 'react';

export interface IFilters {
  tagsList: ITagData[];
  activeTag: string;
  setActiveTag: Dispatch<SetStateAction<string>>;
}
