import "./globals.css";

export const metadata = {
    title: "Mini Project NextJS",
    description: "Product Search App",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}