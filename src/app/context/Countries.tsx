/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useContext, useState } from 'react';

interface ICountriesContext {
  countries: any | null;
  setCountries: (countries: any) => void;
  isLoading: boolean;
  setIsLoading: (change: boolean) => void;
  countryDetailed: any | null;
  setCountryDetailed: (countries: any) => void;
}

interface ICountryProvider {
  children: React.ReactNode;
}

type ICountry = {
  countries: Array<any>;
  totalElements: number;
};

type ICountryInfos = {
  borders: Array<any>;
  populationCounts: Array<any>;
  countryCode: string;
  commonName: string;
  region: string;
  flag: string;
  officialName: string;
};

const CountryContext = React.createContext<ICountriesContext | null>(null);

function CountryProvider({ children }: ICountryProvider) {
  const [country, setCountry] = useState<ICountry>({
    countries: [],
    totalElements: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countryDetailed, setCountryDetailed] = useState<ICountryInfos>({
    borders: [],
    populationCounts: [],
    countryCode: '',
    commonName: '',
    region: '',
    flag: '',
    officialName: '',
  });

  return (
    <CountryContext.Provider
      value={{
        countries: country,
        setCountries: setCountry,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        countryDetailed: countryDetailed,
        setCountryDetailed: setCountryDetailed,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

function useCountry(): ICountriesContext {
  const context = useContext(CountryContext);
  if (context === undefined)
    throw new Error('useCountry must be used within a CountryProvider');
  return context as ICountriesContext;
}

export {
  CountryContext as CountryContext,
  CountryProvider as CountryProvider,
  useCountry as useCountry,
};
