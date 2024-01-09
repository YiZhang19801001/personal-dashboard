import React from 'react';

import Card from './Card';

import { render, screen } from '@testing-library/react';

const defaultProps = {
  withFooterButton: false,
  onFooterButtonClick: () => {},
  contentItems: [],
  hasActionMenu: false,
  title: '',
};

describe('<Card />', () => {
  test('initial render', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByTestId('card-title')).toBeInTheDocument();
  });

  test('should show action dot menu', () => {
    render(<Card {...defaultProps} hasActionMenu={true} />);

    expect(screen.getByTestId('card-action-menu')).toBeInTheDocument();
  });

  test('should render the content item list', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByTestId('card-content-list')).toBeInTheDocument();
  });

  test('should render the footer button', () => {
    render(<Card {...defaultProps} withFooterButton={true} />);

    expect(screen.getByTestId('card-footer-button')).toBeInTheDocument();
  });
});
