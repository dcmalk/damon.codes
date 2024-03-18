import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function Hero() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  console.log(mainContent)
  const { name, email, github, linkedin, twitter, avatar } = mainContent

  return (
    <div className="w-full flex flex-col-reverse sm:flex-row justify-between items-center sm:gap-12">
      <div className="flex-1 flex flex-col gap-y-4 max-w-2xl">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Hey, I'm Damon
        </h1>
        <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
        I'm a software engineer with a passion for AI-assisted development. With over 20 years in the industry, I've transitioned from classic programming to embracing cutting-edge technologies.
        </h2>
        <div className="mt-2 flex flex-col items-start">
          <div className="pb-10 flex space-x-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
            <SocialIcon kind="github" href={github} size={5} />
            <SocialIcon kind="linkedin" href={linkedin} size={5} />
            <SocialIcon kind="twitter" href={twitter} size={5} />
          </div>
        </div>
      </div>
      <div className="w-[80px] sm:w-[186px] md:w-48 relative mb-6 sm:mb-0 rounded-full self-start sm:self-center">
      {avatar && (
          <Image
            src={avatar}
            alt={name}
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
        )}
      </div>
    </div>
  )
}
