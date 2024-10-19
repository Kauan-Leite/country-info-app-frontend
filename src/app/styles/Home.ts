'use client'
import Link from 'next/link';
import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1440px;
  min-width: 360px;
`;

export const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`

export const Button = styled(Link)`
  text-decoration: none;
  color: unset;
`