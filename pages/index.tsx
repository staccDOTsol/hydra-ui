import { Header } from 'common/Header'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'
import { useState } from 'react'

const Home: NextPage = () => {
  const [walletName, setWalletName] = useState<string>('')
  const router = useRouter()
  const ctx = useEnvironmentCtx()

  return (
    <div className="bg-white h-screen max-h-screen">
      <Header />
      <main className="h-[80%] flex flex-1 flex-col justify-center items-center">
        <div className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-6">
          Wrong place, dummy! Nothing to see here!
        </div>
        <form
          className="w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault()
            router.push(
              `/${walletName}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`,
              undefined,
              { shallow: true }
            )
          }}
        >
          <div className="w-full mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              wat
            </label>
            <button    className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-3 rounded-md float-right cursor-pointer"
>
              
            <Link href="https://hackblock.space"
                        
            >Link href="https://hackblock.space" value="getmeouttahere"</Link> </button>
            <span className="text-xs mt-1 mb-3 block text-gray-400 italic"></span>
            <div>
             
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Home
