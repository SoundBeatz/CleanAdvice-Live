import './globals.css';

export const metadata = {
  title: 'Clean Advice Live | Clean360',
  description: 'Live AI video advies voor schoonmaak, service en offertes.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
