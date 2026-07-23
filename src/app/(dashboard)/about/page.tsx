import { aboutContent } from "@/data/about";

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            <div className="relative flex shrink-0 items-center justify-center">
                <span className="bg-accent/40 absolute h-56 w-56 rounded-full blur-3xl" />
                <div className="border-border bg-surface relative flex h-48 w-48 items-center justify-center rounded-full border sm:h-56 sm:w-56">
                    <span className="text-accent font-serif text-5xl italic">
                        {aboutContent.initials}
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
                <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                    About Me
                </span>

                <h1 className="text-text-primary text-4xl font-medium sm:text-5xl">
                    <span className="font-serif italic">{aboutContent.name.charAt(0)}</span>
                    {aboutContent.name.slice(1)}
                </h1>

                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    {aboutContent.roles.map((role) => (
                        <span
                            key={role}
                            className="border-border text-text-primary rounded-pill border px-4 py-1.5 text-sm font-medium"
                        >
                            {role}
                        </span>
                    ))}
                </div>

                <div className="text-text-primary flex max-w-xl flex-col gap-4 text-base leading-relaxed">
                    {aboutContent.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>

                <a
                    href={aboutContent.cvUrl}
                    download
                    className="border-border rounded-pill text-text-primary hover:bg-surface mt-2 inline-flex items-center gap-2 border px-8 py-3 text-sm font-medium transition-colors"
                >
                    Download CV <span aria-hidden className="text-accent">↓</span>
                </a>
            </div>
        </div>
    );
}