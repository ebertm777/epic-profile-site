export const metadata = {
  title: "My Profile Site",
  description: "Criado com Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
