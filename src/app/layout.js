import './globals.css'

export const metadata = {
  title: 'IAH: INTERNET WAR NEXT.JS AI',
  description: 'AI that operates your ingame bots, IAH: INTERNET WAR is RTS game where you can code AI with any programming language and IDE.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
