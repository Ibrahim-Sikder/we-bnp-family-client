'use client';
import { TProgramm } from "@/types";
import { useEffect, useState } from "react";
export const useProgrammData = () => {
    const [programmData, setProgrammData] = useState<TProgramm[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrisonData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm?limit=5`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setProgrammData(data.data?.programms || []);
            } catch (err) {
                setError("Failed to fetch programm data!");
            } finally {
                setLoading(false);
            }
        };

        fetchPrisonData();
    }, []);

    return { programmData, loading, error };
};
