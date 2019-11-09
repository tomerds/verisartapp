import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Login from '../components/login';

it('renders "success" text', async () => {
  const wrapper = rtl.render(<Login />);
  expect(wrapper.queryByText(/success/i)).not.toBeInTheDocument();
  rtl.fireEvent.click(wrapper.getByTestId('messageButton'));
  // "find" queries support async/await!
  expect(await wrapper.findByText(/unsuccessful log in/i));
});