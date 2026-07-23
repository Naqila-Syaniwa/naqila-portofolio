'use client';

import { useState } from 'react';

interface RoleFilterProps {
    roles: string[];
    active: string;
    onChange: (role: string) => void;
}

export function RoleFilter({ roles, active, onChange }: RoleFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-7">
            {roles.map((role) => {
                const isActive = role === active;

                return (
                    <button
                        key={role}
                        type="button"
                        onClick={() => onChange(role)}
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