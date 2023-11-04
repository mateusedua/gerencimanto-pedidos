import { Providers } from "@/provider/providers"
import { UserProviderS } from "@/provider/userProvider"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <UserProviderS>
            {children}
          </UserProviderS>
        </Providers>
      </body>
    </html>
  )
}
