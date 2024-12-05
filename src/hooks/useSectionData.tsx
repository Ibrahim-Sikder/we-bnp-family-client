'use client';
import {  TSection } from "@/types/type";
import { useEffect, useState } from "react";


export const useSectionData = () => {
    const [sectionData, setSectionData] = useState<TSection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchSectionData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/section?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setSectionData(data.data?.sections || []);
            } catch (err) {
                setError("Failed to fetch history data!");
            } finally {
                setLoading(false);
            }
        };

        fetchSectionData();
    }, []);

    return { sectionData, loading, error };
};
