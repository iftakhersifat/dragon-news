import React from 'react';
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center flex-col gap-5'>
            <div className='mt-10'>
                <img src="/assets/logo.png" alt="logo" />
            </div>
            <div className='text-center space-y-2'>
                <p className='text-gray-500 font-semibold text-xl'>Journalism Without Fear or Favour</p>

                {/* date-fns */}
                <p className='text-gray-500'>{format(new Date(), "EEEE, PPP")}</p>
            </div>
        </div>

        <div className='flex items-center gap-4 mt-10 bg-[#F3F3F3] p-4'>
            <h1 className='btn bg-[#D72050] text-white'>Latest</h1>
        <Marquee pauseOnHover={true} speed={60}>
            <p><span className='font-bold'> La Liga : </span>  Barcelona secured a 2-1 victory over Real Valladolid. Fermin López scored a 9/10 performance, while Raphinha earned an 8.5/10 rating. The win keeps Barcelona in the title race. <span className='font-bold'> Serie A :</span> Napoli now need only seven points from their remaining three games to clinch the Serie A title, maintaining their advantage over Inter Milan. <span className='font-bold'> Premier League & English Football : </span> Premier League champions Liverpool face Chelsea today. Manager Arne Slot may rotate the squad, providing opportunities to fringe players as the team aims to surpass Manchester City's record for the largest title-winning margin. <span className='font-bold'> Bundesliga :</span> Bayern Munich's title celebrations are postponed after a draw with RB Leipzig. The Bundesliga title race remains open with a few games left. <span className='font-bold'> Transfer News :</span> Manchester United are reportedly making a move to sign Bayer Leverkusen defender Jonathan Tah, potentially outmaneuvering Barcelona, who were also interested in the player.  </p>
        </Marquee>
        </div>

        </div>
    );
};

export default Header;