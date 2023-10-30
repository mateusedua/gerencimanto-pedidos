'use client'

import { Providers } from "@/providers"
import { UserProvider } from "./Context/UserProvider"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <UserProvider>
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  )
}
