export const metadata = {
  title: "My Profile Site",
  description: "Criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      style={{
        backgroundColor: "#faf9f6",
        cursor: 'url("/busterSword.png"), auto',
      }}
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
