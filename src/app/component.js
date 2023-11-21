'use client'
import { usePrivySmartAccount } from '@zerodev/privy';

export default function Component() {
    const { ready, zeroDevReady, login, authenticated, logout } = usePrivySmartAccount();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Ready: {ready ? 'TRUE' : 'FALSE'}
                </p>
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    ZeroDev Ready: {zeroDevReady ? 'TRUE' : 'FALSE'}
                </p>
                {ready && (
                    <button onClick={authenticated ? logout : login}>
                        {authenticated ? 'LOGOUT' : 'LOGIN'}
                    </button>
                )}
            </div>
        </main>
    )
}
