// app/layout.js
import './globals.css';

export const metadata = {
  title: "Animal World",
  description: "Modern animal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="main">{children}</main>
        <footer className="footer">© 2025 Animal World</footer>
      </body>
    </html>
  );
}
