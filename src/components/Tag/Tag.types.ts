import { HTMLAttributes } from 'react';

export interface ITagData {
  id: string;
  name: string;
  icon: unknown;
}

export interface ITag extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  data: ITagData;
  onClick: (data: ITagData) => void;
}
