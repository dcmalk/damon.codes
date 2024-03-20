import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col-reverse items-center justify-between py-8 md:flex-row md:items-center md:justify-between">
        {/* Copyright */}
        <div className="flex space-x-1 pt-4 text-sm text-gray-500 dark:text-gray-400 md:pt-0">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>

        {/* Social links */}
        <div className="flex space-x-5">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
        </div>
      </div>
    </footer>
  )
}
