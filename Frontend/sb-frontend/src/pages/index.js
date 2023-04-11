import { useEffect, useState } from "react";

export default function Home({ data }) {

  console.log(data)


  

  return (
    <div>
      <div className='flex justify-between items-center flex-col w-full min-h-[70vh] md:min-h-[90vh] pt-[4rem] md:pt-[8rem] px-8 mb-[10rem]'>
        <div className='flex flex-col items-center text-center max-w-3xl gap-1 md:gap-5 z-[2]'>
          <h1 className='text-mono-100 text-2xl font-semibold md:text-6xl '>
            Win Money Playing Your Favorite Video Games
          </h1>
          <h3 className='text-mono-100 text-xl font-regular md:text-4xl'>
            Payouts up to 20x!
          </h3>
          <button className='text-mono-100 font-regular bg-primary-200 rounded border-none mt-3 px-[1.2em] py-[0.6em] text-xl md:text-4xl duration-200 ease-in hover:duration-200 hover:ease-in hover:text-mono-900 hover:scale-110'>
            Sign Up
          </button>
        </div>
        <div className='h-[200px]'></div>
      </div>
      <div className='px-4 max-w-full flex flex-col gap-[8rem] md:gap-[12rem]'>
        {/* Bet */}

        <div className='my-[10rem] flex h-auto flex-col items-center justify-center text-center gap-10 md:gap-[5rem]'>
          <h1 className='text-2xl md:text-5xl text-mono-100 font-semibold'>
            BET
          </h1>
          <div className='w-full md:w-[500px] '>
            <img
              className='w-full h-auto'
              src='https://d2vbw9783wnvea.cloudfront.net/pc_scene_png.png'
              alt=''
            />
          </div>
          <p className='text-mono-100 text-xl md:2xl font-light max-w-[600px]'>
            Placing a bet takes less than 30 seconds. Simply select your game,
            pick your bet line, and confirm. And just like that, your games have
            never meant more...{" "}
          </p>
        </div>

        {/* play */}

        <div className='my-[10rem] flex h-auto flex-col items-center justify-center text-center gap-10 md:gap-[5rem]'>
          <h1 className='text-2xl md:text-5xl text-mono-100 font-semibold'>
            PLAY
          </h1>
          <div className='w-full md:w-[500px] '>
            <img
              className='w-full h-auto'
              src='https://d2vbw9783wnvea.cloudfront.net/nes_controller_png.png'
              alt=''
            />
          </div>
          <p className='text-mono-100 text-xl md:2xl font-light max-w-[600px]'>
            Play your game as you normally would. No matchmaking, no
            tournaments, and no private lobbies. Just you vs us.
          </p>
        </div>

        {/* Funding */}

        <div className='my-[10rem] flex h-auto flex-col items-center justify-center text-center gap-10 md:gap-[5rem]'>
          <h1 className='text-2xl md:text-5xl text-mono-100 font-semibold'>
            FUND YOUR ACCOUNT
          </h1>
          <div className='w-full md:w-[500px] '>
            <img
              className='w-full h-auto'
              src='https://d2vbw9783wnvea.cloudfront.net/algorand.svg'
              alt=''
            />
          </div>
          <p className='text-mono-100 text-xl md:2xl font-light max-w-[600px]'>
            Use the crypto wallet that comes with your account to transfer funds
            between SweatBets and your personal wallets.
          </p>
        </div>

        {/* Favorite Games */}

        <div className='my-[10rem] flex h-auto flex-col items-center justify-center text-center gap-10 md:gap-[5rem]'>
          <h1 className='text-2xl md:text-5xl text-mono-100 font-semibold'>
            PLAY YOUR FAVORITE GAMES
          </h1>
          <div className='w-full md:w-[500px] flex justify-evenly items-center h-full'>
            <div className='w-[100px] h-full flex items-center justify-center'>
              <img
                className='w-full h-auto'
                src='https://d2vbw9783wnvea.cloudfront.net/fortnight_logo.svg'
                alt='FORTNITE logo'
              />
            </div>
            <div className='w-[100px] h-full flex items-center justify-center'>
              <img
                className='w-full h-auto'
                src='https://d2vbw9783wnvea.cloudfront.net/valorant_logo.svg'
                alt='VALORANT logo'
              />
            </div>
          </div>
        </div>

        {/* Final CTA */}

        <div className='my-[10rem] flex h-auto flex-col items-center justify-center text-center gap-10 md:gap-[5rem]'>
          <h1 className='text-2xl md:text-5xl text-mono-100 font-semibold'>
            JOIN THE FUN & WIN BIG!
          </h1>
          <div className='w-full md:w-[500px] '>
            <button className='text-mono-100 font-regular bg-primary-200 rounded border-none mt-3 px-[1.2em] py-[0.6em] text-xl md:text-4xl duration-200 ease-in hover:duration-200 hover:ease-in hover:text-mono-900 hover:scale-110'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


