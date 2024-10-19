import { CountryProvider } from './context/Countries';
import StyledComponentsRegistry from './registry';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CountryProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </CountryProvider>
      </body>
    </html>
  );
}
