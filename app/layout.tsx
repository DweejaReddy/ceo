import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Startup Expo',
  description: 'E-Cell present Startup Expo',
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
      <body className={classNames("h-full w-full overflow-x-hidden", poppins.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
