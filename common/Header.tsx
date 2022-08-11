import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { AccountConnect } from '@cardinal/namespaces-components'

import { Wallet } from '@saberhq/solana-contrib'
import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'
import styled from '@emotion/styled'
import { Cluster } from '@solana/web3.js'
import Link from 'next/link'

export const StyledWalletButton = styled(WalletMultiButton)`
  color: rgb(55, 65, 81, 1);
  &:hover {
    background: none !important;
  }
  .wallet-adapter-button {
    padding: 0px;
  }
`
const someToks = ["AD1bo7F21Cy8sfUkYXEBLJTTXA7Z8NREwMX1pZBgLakq","Fq1ZUCxZYWcEJdtN48zmhMkpVYCYCBSrnNU351PFZwCG",("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
("8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh"),
("8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA"),
("PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x")
,"openDKyuDPS6Ak1BuD3JtvkQGV3tzCxjpHUfe1mdC79","3VFxnBvhLtMiWJL5jMcmvX59PEBMusVGUSNeL341zq3r"  ]

let hmms = [
  'staccbo7', 'staccZUC','staccFWd','staccyAA','staccjSp','staccMNs','staccnDK' , 'hackblock.space'
]
let hmms2 = [
  "War & Peace",
  "Gamin",

  "USDC",
  "COPE",
  "Grape" ,
  "PRISM" ,
"OPEN" ,"HB.S"
]
let blargs2 : any = {}
for (var i in someToks){
  // @ts-ignore
  blargs2[someToks[i]] = hmms[i]
  } 
const someDecs = [9,9,6,
6,
6,
6, 9,9
]
let someBlargs: any = {}
for (var i in someToks){
// @ts-ignore
someBlargs[someToks[i]] = someDecs[i]
} 
export const Header = () => {
  const router = useRouter()
  const ctx = useEnvironmentCtx()
  const wallet = useWallet()
  return (
    <div className={`flex flex-row h-20 justify-between pl-5 text-white`}>
      {// @ts-ignore
        <div className="flex items-center gap-3">
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
          Hydras
        </div>
   
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[0]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[0]}
        </div>
      
          <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[1]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[1]}
        </div>
      
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[2]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[2]}
        </div>
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[3]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[3]}
        </div>
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[4]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[4]}
        </div>
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[5]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[5]}
        </div><div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[6]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[6]}
        </div>
        <div
          className="text-gray-700 font-bold uppercase tracking-wide hover:cursor-pointer"
          onClick={() =>
            router.push(
              `/${hmms[7]}${
                ctx.environment.label !== 'mainnet-beta'
                  ? `?cluster=${ctx.environment.label}`
                  : ''
              }`
            )
          }
        >
         {hmms2[7]}
        </div>
      
        {ctx.environment.label !== 'mainnet-beta' && (
          <div className="cursor-pointer rounded-md bg-[#9945ff] p-1 text-[10px] italic text-white">
            {ctx.environment.label}
          </div>
        )}
      </div>

}
      <div className="relative my-auto flex items-center pr-8 align-middle">
      <div className="relative my-auto flex items-center align-middle text-gray-700 font-bold uppercase tracking-wide">
      <p className="my-auto mr-10 hover:cursor-pointer">   <Link href="https://app.strataprotocol.com/swap/7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi" >
            get HB.S gaming token</Link>
            </p> 
        </div>
        <div className="relative my-auto flex items-center align-middle text-gray-700 font-bold uppercase tracking-wide">
          <div
            onClick={() =>
              router.push(
                `/create${
                  ctx.environment.label !== 'mainnet-beta'
                    ? `?cluster=${ctx.environment.label}`
                    : ''
                }`
              )
            }
          >
            <p className="my-auto mr-10 hover:cursor-pointer">hydras are cool</p>
          </div>
        </div>
        
        {wallet.connected && wallet.publicKey ? (
          <AccountConnect
            connection={ctx.connection}
            environment={ctx.environment.label as Cluster}
            handleDisconnect={() => wallet.disconnect()}
            wallet={wallet as Wallet}
          />
        ) : (
          <StyledWalletButton
            style={{
              fontSize: '14px',
              zIndex: 10,
              height: '38px',
              border: 'none',
              background: 'none',
              backgroundColor: 'none',
            }}
          />
        )}
      </div>
    </div>
  )
}
