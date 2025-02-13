export const metadata = {
  title: "My Profile Site",
  description: "Criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      style={{
        backgroundColor: "#faf9f6",
        cursor: 'url("/diamondSword.cur"), auto',
      }}
      lang="en"
      suppressHydrationWarning
    >
      <head></head>
      <body>{children}</body>
    </html>
  );
}
