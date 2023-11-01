'use client';

import { NetworkProvider } from '@server-app/libs/network';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Hotel = {
  name: string;
  address1: string;
};

function List() {
  const { data } = useQuery({
    queryKey: ['hotels'],
    queryFn: (): Promise<{ hotels: Hotel[] }> =>
      axios
        .get('http://localhost:4200/api/hotels')
        .then((response) => response.data),
  });

  return (
    <div>
      {data?.hotels.map((hotel) => (
        <>
          <div>
            <p>{hotel.name}</p>
            <p>{hotel.address1}</p>
          </div>
          <br></br>
        </>
      ))}
    </div>
  );
}

export default async function Index() {
  return (
    <NetworkProvider>
      <List />
    </NetworkProvider>
  );
}
