import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem, { ListItemProps, ListItemType } from './ListItem';

const defaultProps: ListItemProps = {
  type: ListItemType.jira,
  title: '[web] Page Template | File Group Default Settings',
  navigateTo: '',
};
describe('render', () => {
  test('should render initially without errors', () => {
    render(<ListItem {...defaultProps} />);

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('thumbnail')).toBeInTheDocument();
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});
