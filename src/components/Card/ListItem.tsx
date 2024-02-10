import React from 'react';

export enum ListItemType {
  jira = 'jira',
  slack = 'slack',
  todo = 'todo',
}

export type ListItemProps = {
  title: string;
  navigateTo: string;
  type: ListItemType;
};

function ListItem({ title, navigateTo, type }: ListItemProps) {
  return (
    <div>
      <div data-testid="thumbnail"></div>
      <div data-testid="title"></div>
      <div>
        <a href={navigateTo} data-testid="link"></a>
      </div>
    </div>
  );
}

export default ListItem;
