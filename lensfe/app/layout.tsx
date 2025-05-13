import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: 'Lens Protocol Login',
  description: 'Login with Lens Protocol and Rainbow WalletKit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Providers>
          {children}
        </Providers>
        
      </body>
    </html>
  );
}
