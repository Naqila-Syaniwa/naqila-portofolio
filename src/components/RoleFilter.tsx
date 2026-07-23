'use client';

interface RoleFilterProps {
    roles: string[];
    active: string;
    onChange: (role: string) => void;
}

export function RoleFilter({ roles, active, onChange }: RoleFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-5 xl:gap-7">
            {roles.map((role) => {
                const isActive = role === active;

                return (
                    <button
                        key={role}
                        type="button"
                        onClick={() => onChange(role)}
                        aria-pressed={isActive}
                        className={`rounded-pill border px-3 py-1.5 text-xs font-medium transition-colors md:px-4 md:py-2 md:text-sm ${
                            isActive
                                ? 'border-accent text-accent bg-accent/10 underline underline-offset-4'
                                : 'border-border text-text-primary hover:bg-surface'
                        }`}
                    >
                        {role}
                    </button>
                );
            })}
        </div>
    );
}