import React from 'react';
import { render, fireEvent, waitForElement, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUp from './index';

beforeEach(() => {
  render(
    <Router>
      <SignUp />
    </Router>
  );
});

describe('tests in <SignUp />', () => {
  test('it renders without crashing', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
  });

  test('email is incorrect', async () => {
    const inputEmail = screen.getByTestId('email');
    const signUpButton = screen.getByTestId('signUpButton');

    fireEvent.change(inputEmail, { target: { value: 'adsad' } });
    fireEvent.click(signUpButton);

    const error = await waitForElement(() => screen.getAllByTestId('error'));
    expect(error.length !== 0).toBe(true);
  });

  test('password is incorrect', async () => {
    const inputPassword = screen.getByTestId('password');
    const inputConfirmPassword = screen.getByTestId('password_confirmation');
    const signUpButton = screen.getByTestId('signUpButton');

    fireEvent.change(inputPassword, { target: { value: '123' } });
    fireEvent.change(inputConfirmPassword, { target: { value: '321' } });
    fireEvent.click(signUpButton);

    const error = await waitForElement(() => screen.getAllByTestId('error'));
    expect(error.length !== 0).toBe(true);
  });

  test('data entered incorrectly', async () => {
    const inputName = screen.getByTestId('first_name');
    const inputLastName = screen.getByTestId('last_name');
    const inputEmail = screen.getByTestId('email');
    const inputPassword = screen.getByTestId('password');
    const inputConfirmPassword = screen.getByTestId('password_confirmation');
    const signUpButton = screen.getByTestId('signUpButton');

    fireEvent.change(inputName, { target: { value: 'Maxi' } });
    fireEvent.change(inputLastName, { target: { value: 'Coppola' } });
    fireEvent.change(inputEmail, { target: { value: 'dasd' } });
    fireEvent.change(inputPassword, { target: { value: '123456' } });
    fireEvent.change(inputConfirmPassword, { target: { value: '123456' } });

    fireEvent.click(signUpButton);
    const error = await waitForElement(() => screen.getAllByTestId('error'));

    expect(error.length !== 0).toBe(true);
  });
});
