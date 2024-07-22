import { inter } from './ui/font';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/*   <div className="border-2 border-black p-7 rounded-full flex justify-center text-2xl font-bold">Holros</div> */}
        {children}
      </body>
    </html>
  );
}
