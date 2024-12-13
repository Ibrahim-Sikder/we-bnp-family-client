'use client';
import { TDisappearance } from "@/types/disappearance";
import { useEffect, useState } from "react";


export const useDisappearanceData = () => {
    const [disappearanceData, setDisappearanceData] = useState<TDisappearance[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchDisappearanceData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/disappearance?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setDisappearanceData(data.data?.disappearances || []);
            } catch (err) {
                setError("Failed to fetch disappearance data!");
            } finally {
                setLoading(false);
            }
        };

        fetchDisappearanceData();
    }, []);

    return { disappearanceData, loading, error };
};
