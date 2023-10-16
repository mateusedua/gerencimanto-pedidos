import { Providers } from "@/providers"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <>
        <Providers>
          {children}
        </Providers>
      </>
    </html>
  )
}
