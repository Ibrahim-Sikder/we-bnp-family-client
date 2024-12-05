'use client';
import { THistory, TSection } from "@/types/type";
import { useEffect, useState } from "react";


export const useHistoryData = () => {
    const [historyData, setHistoryData] = useState<THistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    
    useEffect(() => {
        const fetchHistoryData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/history?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setHistoryData(data.data?.histories || []);
            } catch (err) {
                setError("Failed to fetch history data!");
            } finally {
                setLoading(false);
            }
        };

        fetchHistoryData();
    }, []);

    return {  historyData, loading, error };
};
