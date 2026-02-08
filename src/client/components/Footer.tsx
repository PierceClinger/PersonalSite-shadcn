import { useState } from 'react'
import { Card } from './ui/card'
import './Footer.css'
import { Icon } from '@mdi/react'
import { Separator } from "./ui/separator"
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiEmailOutline } from '@mdi/js'

function Footer() {
    const socials = [
        { name: 'GitHub', iconPath: mdiGithub, url: 'https://github.com/PierceClinger' },
        { name: 'LinkedIn', iconPath: mdiLinkedin, url: 'https://www.linkedin.com/in/pierce-clinger-6889481a7' },
        { name: 'Instagram', iconPath: mdiInstagram, url: 'https://www.instagram.com/pierceclinger/' },
        { name: 'Email', iconPath: mdiEmailOutline, url: 'mailto:pwclinger@gmail.com' }
    ]

    return (
        <>
            <div className="footer-wrapper w-full rounded-lg mt-2">
                <Separator />
                <div className="w-full h-1/6 flex items-center justify-center lg:justify-end p-2">
                    {socials.map((social, index) => (
                        <a 
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className='mx-2' path={social.iconPath} size={1.5} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Footer