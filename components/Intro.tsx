import Link from '@/components/Link'

export default function Intro() {
  return (
    <div className="flex w-full">
      <div className="flex flex-1 flex-col gap-y-4 border-t border-gray-200 pt-4 dark:border-gray-700">
        {/* <h1 className="text-2xl font-bold leading-8 tracking-tight">About Me</h1> */}
        <h2 className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          <p className="mb-4">
            I started my career at a young age, quickly becoming a self-motivated innovator. My
            experience includes designing intricate data systems, bridging the gap between old and
            new technologies, and deploying software worldwide.
          </p>
          <p className="mb-4">
            Driven by my entrepreneurial spirit, I've delved into digital marketing, web
            technologies, and emerging areas like AI and web3. As the tech landscape evolves, my
            passion for elegant solutions remains the same. I continuously update my skills,
            currently focusing on AI-assisted development.
          </p>
          <p>
            I'm a thinker who thrives in focused work environments. Whether collaborating or
            tackling complex projects solo, I bring a seasoned perspective on development's past,
            present, and future. If your project requires experience, efficiency, and an innovative
            edge, let's explore how I can help.
          </p>
        </h2>
        <div className="mb-8 text-base font-medium leading-6 ">
          <Link
            href={`/about`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Read more: "About"`}
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
