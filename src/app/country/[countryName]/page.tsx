/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import '@/app/global.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
  Container,
  ContainerText,
  PrincipalContent,
  Flag,
  Text,
  BorderCountriesContent,
  BackBtn,
} from './styles';
import { useEffect } from 'react';
import { CountriesAPI } from '@/app/services/CountriesAPI';
import { useCountry } from '@/app/context/Countries';
import { Button, CardContainer } from '@/app/styles/Home';
import Card from '@/components/Card/Index';
import { LineChart } from '@mui/x-charts';

export default function Page({ params }: { params: { countryName: string } }) {
  const { isLoading, setIsLoading, countryDetailed, setCountryDetailed } =
    useCountry();

  const getCountryInfo = async () => {
    setIsLoading(true);
    const country = await CountriesAPI.getCountryInfos(params.countryName);

    setCountryDetailed(country);

    setIsLoading(false);
  };

  useEffect(() => {
    getCountryInfo();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Button href={`/`}>
              <BackBtn>
                <p>Back</p>
              </BackBtn>
            </Button>
            <PrincipalContent>
              <Flag src={countryDetailed.flag} />
              <ContainerText>
                <Text>{countryDetailed.commonName}</Text>

                <LineChart
                  xAxis={[
                    {
                      data: countryDetailed.populationCounts.map(
                        (it: any) => it.year
                      ),
                    },
                  ]}
                  series={[
                    {
                      data: countryDetailed.populationCounts.map(
                        (it: any) => it.value
                      ),
                      area: true,
                    },
                  ]}
                  width={400}
                  height={250}
                />
                {/* <Text>{countryDetailed.commonName}</Text> */}
              </ContainerText>
            </PrincipalContent>
            <BorderCountriesContent>
              <Text>Border Countries</Text>
              <PrincipalContent>
                <CardContainer>
                  {countryDetailed.borders.length > 0 ? (
                    countryDetailed.borders.map(
                      (country: any, index: number) => {
                        return (
                          <Button
                            key={index}
                            href={`/country/${country.countryCode}`}
                          >
                            <Card countryName={country.commonName} />
                          </Button>
                        );
                      }
                    )
                  ) : (
                    <p>No countries are on the border.</p>
                  )}
                </CardContainer>
              </PrincipalContent>
            </BorderCountriesContent>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
