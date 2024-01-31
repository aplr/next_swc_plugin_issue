"use client"

export function Now({ now }: { now: Date}) {
    return <div>{now.toISOString()}</div>;
}