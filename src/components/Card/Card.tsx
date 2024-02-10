import React from 'react';

export enum CardType {
  default = 'default',
  list = 'list',
}

export enum CardSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type CardProps = {
  type: CardType;
  size: CardSize;
  title: string;
  hasFooter: boolean;
  onFooterButtonClick: () => void;
  contentItems: Array<any>;
  hasActionMenu: boolean;
};

function Card(props: CardProps) {
  const { title, hasFooter, onFooterButtonClick, contentItems, hasActionMenu } =
    props;

  return (
    <div>
      <header>
        <h3 data-testid="card-title">{title}</h3>
        <span data-testid="card-action-menu"></span>
      </header>
      <div data-testid="card-content-list"></div>
      {hasFooter && (
        <footer>
          <button
            data-testid="card-footer-button"
            onClick={onFooterButtonClick}
          >
            View All
          </button>
        </footer>
      )}
    </div>
  );
}

export default Card;
