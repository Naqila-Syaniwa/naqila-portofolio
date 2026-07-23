import { aboutContent } from "@/data/about";
import { RoleFilter } from "@/components/RoleFilter";

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="w-full">
                <RoleFilter roles={aboutContent.roles} />
            </div>

            <div className="border-border bg-surface h-64 w-64 rounded-card border sm:h-72 sm:w-72" />

            <div className="text-text-primary max-w-xl text-center text-base leading-relaxed">
                {aboutContent.bio.map((paragraph, i) => (
                    <p key={i} className="mt-4 first:mt-0">
                        {paragraph}
                    </p>
                ))}
            </div>

            <a
                href={aboutContent.cvUrl}
                download
                className="border-border rounded-pill text-text-primary hover:bg-surface inline-flex items-center gap-2 border px-8 py-3 text-sm font-medium transition-colors"
            >
                Download CV
            </a>
        </div>
    );
}