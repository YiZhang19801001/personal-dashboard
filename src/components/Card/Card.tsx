import React from 'react';

type CardProps = {
  title: string;
  withFooterButton: boolean;
  onFooterButtonClick: () => void;
  contentItems: Array<any>;
  hasActionMenu: boolean;
};

function Card(props: CardProps) {
  const {
    title,
    withFooterButton,
    onFooterButtonClick,
    contentItems,
    hasActionMenu,
  } = props;

  return (
    <div>
      <header>
        <h3 data-testid="card-title">{title}</h3>
        <span data-testid="card-action-menu"></span>
      </header>
      <div data-testid="card-content-list"></div>
      <footer>
        <button data-testid="card-footer-button">View All</button>
      </footer>
    </div>
  );
}

export default Card;
