import StyledComponentsRegistry from "./registry";
import LoadingWrapper from "./loading-wrapper"; // componente client

export const metadata = {
  title: "Eber T.M Profile Site",
  description: "Criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{
        backgroundColor: "#28282B",
        cursor: 'url("/Images/diamondSword.cur"), auto',
      }}
    >
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <LoadingWrapper>
            {children}
          </LoadingWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
