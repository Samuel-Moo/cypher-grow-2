import Subscription from '../components/Subscription';
//const solanaWeb3 = require("@solana/web3.js");
//const { Keypair } = require("@solana/web3.js");
import toast, { Toaster } from "react-hot-toast"
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

function Profile() {
  
  const {data: session, status} = useSession();
  const router = useRouter();
  console.log(session, status);

  
  //Conecta con wallet (Por ahora solo abre phantom)
  const signIn = async () => {
    //console.log("Wenas noches!!"); //PRUEBA DEL BUTTON
    const provider = window?.phantom?.solana;
    const { solana } = window;

    if (!provider?.isPhantom || !solana.isPhantom) {
      toast.error("Phantom no esta instalado");
      setTimeout(() => {
        window.open("https://phantom.app/", "_blank");
      }, 2000);
      return;
    }

    let phantom;
    if (provider?.isPhantom) phantom = provider;

    const { publicKey } = await phantom.connect(); //Conecta phantom
    console.log("publicKey", publicKey.toString());
    toast.success("Tu wallet esta connectada");
  };

  //--------------      RENDER DE LA PAGINA     --------------------
  if(status === 'authenticated'){
  return (
    <>
      <section className='flex pt-6 pb-10 px-24'>


        <img src={session.user.image} className='h-64 w-64 rounded-full bg-white'></img>
        <div className='flex-col grow p-10 space-y-4'>
          <h1 className='text-6xl'>{session.user.name}</h1>
          <p className='text-xl'>Code master... coffee is never enough</p>


          <button
            type='submit'
            onClick={signIn}
            className='bg-violet-800 grow hover:bg-violet-900 text-white font-bold py-2 px-4 rounded'
          >
            Conect Wallet
          </button>
        </div>

      </section>
      <hr className='mx-16 '></hr>
      <Subscription />

    </>
  )
  }else if(status === 'unauthenticated'){  //Redirect
    router.push('/login')
  }else if(status === 'loading'){ 
    //AQUI PUEDE IR UN SKELETON
    return(
    <h1 className='text-4xl text-cyan-500'>Loading</h1>
    )
  }
}


export default Profile;