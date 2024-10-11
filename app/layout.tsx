import { Metadata } from 'next';
import { inter } from './ui/font';
import './ui/global.css';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

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
