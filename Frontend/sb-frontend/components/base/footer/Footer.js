const Footer = () => {
  return (
    <footer className='bg-mono-800 h-52 flex flex-col items-center justify-end px-3 pb-3  '>
      <div className='w-full md:max-w-6xl'>
      <div className='flex flex-col max-w-screen-lg gap-0.5'>
              <div className='cursor-pointer padding-0 gap-0.5 h-4 flex flex-row-reverse items-start justify-end'>
                  <a href='https://discord.gg/PfU7q4RGar' className='transition overflow-hidden whitespace-nowrap duration-200 ease-linear' alt='' ><img className='duration-200 ease-linear cursor-pointer h-100 hover:invert-[.69] hover:sepia-[.86] hover:saturate-[4.35] hover:backdrop-hue-rotate-90 hover:brightness-[.87] hover:contrast-[.89]' src='https://d2vbw9783wnvea.cloudfront.net/discord_logo.svg' alt='Discord Logo' /></a>
                  <a href='https://www.youtube.com/channel/UCY7Zydqz7MllRcpgjCyeAlw' className='transition overflow-hidden whitespace-nowrap duration-200 ease-linear' alt='' ><img className='duration-200 ease-linear cursor-pointer h-100' src='https://d2vbw9783wnvea.cloudfront.net/youtube_logo.svg' alt='Youtube Logo' /></a>
                  <a href='https://twitter.com/ASAP_Beet' className='transition overflow-hidden whitespace-nowrap duration-200 ease-linear' alt='' ><img className='duration-200 ease-linear cursor-pointer h-100 ' src='https://d2vbw9783wnvea.cloudfront.net/twitter_logo.svg' alt='Twitter Logo' /></a>
                  <a href='https://instagram.com/sweatbetsofficial/' className='transition overflow-hidden whitespace-nowrap duration-200 ease-linear' alt='' ><img className='duration-200 ease-linear cursor-pointer h-100' src='https://d2vbw9783wnvea.cloudfront.net/instagram_logo.svg' alt='Instagram Logo' /></a>
                  <a href='https://www.tiktok.com/@asap_beet?_t=8XFqQWCHMs6&_r=1' className='transition overflow-hidden whitespace-nowrap duration-200 ease-linear' alt='' ><img className='duration-200 ease-linear cursor-pointer h-100' src='https://d2vbw9783wnvea.cloudfront.net/tiktok_logo.svg' alt='TikTok Logo' /></a>
        </div>
      </div>
      <div className='flex flex-col align-start text-xs'>
        <a className='overflow-hidden whitespace-nowrap transition duration-200 ease-linear' href='/terms'>
          <p className='text-mono-200 uppercase transition duration-200 ease-linear hover:text-primary-200 hover:duration-200 hover:ease-linear' id='terms'>
            Terms & Conditions
          </p>
              </a>
            <p className='text-mono-200 uppercase flex items-start'>sweatbets llc</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
