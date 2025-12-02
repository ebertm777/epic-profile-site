import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Eber T.M Profile Site",
  description: "Criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        backgroundColor: "#28282B",
        cursor: 'url("/Images/diamondSword.cur"), auto',
      }}
      suppressHydrationWarning
    >
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
