import * as React from 'react';
import {Link} from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {socialBar} from './social.module.css';
import {imgContainer} from './social.module.css'

const Social = () => {
    return(
        <div className={socialBar}>
            <div className={imgContainer}>
            <Link to='https://www.twitch.tv/skullyfoxtv' target='_blank'>
                <StaticImage
                    alt='Twitch'
                    src='../../images/twitch.png'></StaticImage>
            </Link>
            </div>
            <div className={imgContainer}>
            <Link to='https://www.youtube.com/channel/UCcpway-vOriYNB2NC-5e3ag' target='_blank'>
                <StaticImage
                    alt='Youtube'
                    src='../../images/youtube.png'></StaticImage>
            </Link>
            </div>
            <div className={imgContainer}>
            <Link to='https://discord.gg/9PZMkR7wwQ' target='_blank'>
                <StaticImage
                    alt='Discord'
                    src='../../images/discord.png'></StaticImage>
            </Link>
            </div>
        </div>
    );
};

export default Social;