import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Startup Expo',
  description: 'E-Cell present Startup Expo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
