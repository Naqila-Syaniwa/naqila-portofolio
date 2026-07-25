import Link from "next/link";
import { notFound } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";
import { projects, getProjectBySlug } from "@/lib/content";
import { ProjectDetail } from "@/components/ProjectDetail";

interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-6">
            <Link
                href="/projects"
                className="border-border bg-surface text-text-primary hover:border-accent focus-visible:ring-accent focus-visible:ring-offset-background inline-flex w-fit items-center gap-1.5 rounded-pill border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
                <FiChevronLeft aria-hidden />
                Back
            </Link>

            <ProjectDetail project={project} />
        </div>
    );
}