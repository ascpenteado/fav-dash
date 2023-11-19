import './global.css';
import 'dist/libs/trf-components/style.css';

export const metadata = {
  title: 'Seus favorecidos | Transfeera',
  description: 'Sua lista de favorecidos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
