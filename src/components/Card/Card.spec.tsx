import React from 'react';

import Card, { CardProps, CardType, CardSize } from './Card';

import { render, screen } from '@testing-library/react';

const defaultProps: CardProps = {
  type: CardType.list,
  size: CardSize.large,
  hasFooter: false,
  onFooterButtonClick: () => {},
  contentItems: [],
  hasActionMenu: false,
  title: 'Jira Tasks',
};

describe('<Card />', () => {
  test('initial render', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByTestId('card-title')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  test('should show action dot menu', () => {
    render(<Card {...defaultProps} hasActionMenu={true} />);

    expect(screen.getByTestId('card-action-menu')).toBeInTheDocument();
  });

  test('should render the content item list', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByTestId('card-content-list')).toBeInTheDocument();
  });

  test('should render the footer when hasFooter is true', () => {
    render(<Card {...defaultProps} hasFooter />);

    expect(screen.getByTestId('card-footer-button')).toBeInTheDocument();
  });

  test('should not render the footer by default', () => {
    render(<Card {...defaultProps} />);

    expect(screen.queryByTestId('card-footer-button')).not.toBeInTheDocument();
  });
});
