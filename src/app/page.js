'use client'
import { arbitrumGoerli } from '@wagmi/chains';
import { ZeroDevProvider } from '@zerodev/privy';
import { PrivyProvider } from '@privy-io/react-auth';
import Component from './component';

export default function Home() {
  return (
    <ZeroDevProvider
      projectId={process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID}
      gasToken='USDC'
    >
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
        config={{
          defaultChain: arbitrumGoerli,
          supportedChains: [arbitrumGoerli],
          appearance: {
            theme: "#1C1F3F",
            accentColor: "#F17843",
            logo: '/coven.png',
            showWalletLoginFirst: true
          },
          embeddedWallets: {
            createOnLogin: 'users-without-wallets',
            noPromptOnSignature: true
          },
          loginMethods: ['email'],
        }}
      >
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            {<Component />}
          </div>
        </main>
      </PrivyProvider>
    </ZeroDevProvider>
  )
}
