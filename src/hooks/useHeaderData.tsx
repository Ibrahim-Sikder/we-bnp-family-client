'use client';
import { THistory } from "@/types/type";
import { useEffect, useState } from "react";


export const useHeaderData = () => {
    const [headerData, setHeaderData] = useState<THistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/header?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setHeaderData(data.data?.headers || []);
            } catch (err) {
                setError("Failed to fetch header data!");
            } finally {
                setLoading(false);
            }
        };

        fetchHeaderData();
    }, []);

    return { headerData, loading, error };
};
