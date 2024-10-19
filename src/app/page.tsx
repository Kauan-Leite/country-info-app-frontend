'use client';
/* eslint-disable react-hooks/exhaustive-deps */

import './global.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button, CardContainer, Container } from './styles/Home';
import { useEffect } from 'react';
import { CountriesAPI } from './services/CountriesAPI';
import { useCountry } from './context/Countries';
import Card from '@/components/Card/Index';

export default function Home() {
  const { countries, setCountries, isLoading, setIsLoading } = useCountry();

  const getAllCountries = async () => {
    setIsLoading(true);
    const allCountries = await CountriesAPI.getAvailableCountries();

    await setCountries(allCountries.countries);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <CardContainer>
            {countries.map(
              (
                country: { countryCode: string; name: string },
                index: number
              ) => {
                return (
                  <Button key={index} href={`/country/${country.countryCode}`}>
                    <Card countryName={country.name} />
                  </Button>
                );
              }
            )}
          </CardContainer>
        )}
      </Container>
      <Footer />
    </>
  );
}
