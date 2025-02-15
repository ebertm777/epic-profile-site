export const metadata = {
  title: "My Profile Site",
  description: "Criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      style={{
        backgroundColor: "#28282B",
        cursor: 'url("/diamondSword.cur"), auto',
      }}
      lang="en"
      suppressHydrationWarning
    >
      <head></head>
      <body
        style={{
          marginBottom: "0px",
        }}
      >
        {children}
      </body>
    </html>
  );
}
