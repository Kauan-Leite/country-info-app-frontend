import { Container } from "./styles";

interface CardProps {
  countryName: string
}

export default function Card(props: CardProps) {
  return (
    <Container>
      <h1>{props.countryName}</h1>
    </Container>
  );
}