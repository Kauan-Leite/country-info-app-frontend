'use client';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
`;

export const PrincipalContent = styled.div`
  margin: 20px;
  border-radius: 8px;
  background-color: #ddd;
  display: flex;
`;

export const BorderCountriesContent = styled.div`
  margin: 20px;
  border-radius: 8px;
  background-color: #ddd;
`;

export const Flag = styled.img`
  width: 300px;
  height: 200px;
`;

export const ContainerText = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-height: 800px; */
`;

export const BackBtn = styled.div`
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 12px;
  text-align: center;
  font-weight: 800;
  cursor: pointer;
  width: 80px;
  padding: 10px;
  margin: 10px 20px;
`;

export const Text = styled.h1`
  font-size: 32px;
  margin: 6px 40px;
  text-align: center;
`;
