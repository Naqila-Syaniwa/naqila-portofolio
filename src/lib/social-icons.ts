import type { IconType } from 'react-icons';
import { SiGithub, SiInstagram, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export const socialIconMap: Record<string, IconType> = {
    github: SiGithub,
    linkedin: FaLinkedin,
    instagram: SiInstagram,
    gmail: SiGmail,
};