
import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";

export const metadata = {
  title: "CampusLoop | College Lost and Found",
  description:
    "A college platform to report, discover and reunite lost belongings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
