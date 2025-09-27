import './globals.css';
import Navbar from './components/Navbar'; // << path зассан

export const metadata = {
  title: "Animal World",
  description: "Modern animal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main">{children}</main>
        <footer className="footer">© 2025 Animal World</footer>
      </body>
    </html>
  );
}
