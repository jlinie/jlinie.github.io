import Link from "next/link";

export default function IntroSection() {
  return (
    <section id="intro" className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Hello, I&apos;m Ceylin
        </h2>
        <p className="mt-12 max-w-3xl text-lg leading-8 text-zinc-300">
          Welcome to my blog.
          Use the images, or the menu to explore. Feel free to reach out!
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          To get to know me better, check out my info page:
        </p>

        <p className="mt-4 text-lg text-zinc-500" aria-hidden="true">
          ↓↓↓↓↓↓↓↓↓↓↓
        </p>

        <p className="mt-2 text-lg leading-8">
          <Link href="/info" className="underline text-zinc-300 hover:text-white">
                  About Me
          </Link>
        </p>
      </div>
    </section>
  );
}