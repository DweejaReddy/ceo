import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'CEO',
  description: 'E-Cell present CEO',
}

import { Poppins } from "@next/font/google";
import { classNames } from '@/components/utils/helper';
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width" initial-scale="1" interactive-widget="resizes-content" />
      <body className={classNames("h-screen w-screen overflow-x-hidden", poppins.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
