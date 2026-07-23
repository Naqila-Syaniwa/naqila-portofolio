'use client';

import { useState } from 'react';

interface RoleFilterProps {
    roles: string[];
}

export function RoleFilter({ roles }: RoleFilterProps) {
    const [active, setActive] = useState(roles[0]);

    return (
        <div className="flex flex-wrap justify-center gap-7">
            {roles.map((role) => {
                const isActive = role === active;

                return (
                    <button
                        key={role}
                        type="button"
                        onClick={() => setActive(role)}
                        aria-pressed={isActive}
                        className={`rounded-pill border px-4 py-2 text-sm font-medium transition-colors ${
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