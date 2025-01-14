'use client';
import { TPrison } from "@/types/prison";
import { activityFields, prisonFields } from "@/utils/fields";
import { useEffect, useState } from "react";


export const usePrisonData = () => {
    const [prisonData, setPrisonData] = useState<TPrison[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchPrisonData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/prison?limit=6&fields=${prisonFields}`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setPrisonData(data.data?.prisons || []);
            } catch (err) {
                setError("Failed to fetch prison data!");
            } finally {
                setLoading(false);
            }
        };

        fetchPrisonData();
    }, []);

    return { prisonData, loading, error };
};
