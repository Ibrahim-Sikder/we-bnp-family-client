'use client';
import { TPrison } from "@/types/prison";
import { TReport } from "@/types/report";
import { useEffect, useState } from "react";


export const useReportData = () => {
    const [reportData, setReportData] = useState<TReport[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/report?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setReportData(data.data?.reports || []);
            } catch (err) {
                setError("Failed to fetch report data!");
            } finally {
                setLoading(false);
            }
        };

        fetchReportData();
    }, []);

    return { reportData, loading, error };
};
