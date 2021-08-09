import { useState } from 'react';
import { act, render, screen } from '@testing-library/react';
import { useCurrentPosition } from 'react-use-geolocation';
import Location from './Location';

jest.mock('react-use-geolocation');

test('displays user current location', () => {
  const fakePosition = {
    coords: {
      latitude: 40,
      longitude: 35,
    },
  };

  let setStateValue;

  const useMockCurrentPosition = () => {
    const [state, setState] = useState([]);
    setStateValue = setState;
    return state;
  };

  useCurrentPosition.mockImplementation(useMockCurrentPosition);

  render(<Location />);

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();

  act(() => {
    setStateValue([fakePosition]);
  });

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument();

  expect(
    screen.getByText(`Latitude: ${fakePosition.coords.latitude}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Longitude: ${fakePosition.coords.longitude}`)
  ).toBeInTheDocument();
});

test('displays error message when location is not supported', () => {
  const fakeError = {
    message: 'Geolocation is not supported or permission denied',
  };

  let setStateValue;

  const useMockCurrentPosition = () => {
    const [state, setState] = useState([]);
    setStateValue = setState;
    return state;
  };

  useCurrentPosition.mockImplementation(useMockCurrentPosition);

  render(<Location />);

  act(() => {
    setStateValue([null, fakeError]);
  });

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument();
  expect(screen.getByRole('alert')).toHaveTextContent(fakeError.message);
});
