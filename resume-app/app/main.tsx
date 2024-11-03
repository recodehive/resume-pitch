// @ts-nocheck
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import UploadButton from "@/components/ui/UploadButton";
import Header from "@/components/header";
import { worker } from "@/lib/workerInit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Site from "./site";

export default function Main({ session }) {
    const [loading, setLoading] = useState(true);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleFileChange = async (e: any, isDragDrop: boolean = false) => {
        const files = isDragDrop ? e.dataTransfer.files : e.target.files;
        
        if (files && files.length > 0) {
            const file = files[0];
            const validTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];

            if (validTypes.includes(file.type)) {
                fileInputRef.current.value = "";
                setLoading(true);
                
                try {
                    worker(file.name, file).then(async data => {
                        setLoading(false);
                        toast("Successfully uploaded...");
                    }).catch((error) => {
                        setLoading(false);
                        toast("Couldn't upload file...");
                        console.error("Upload failed:", error);
                    })
                } catch (error) {
                    setLoading(false);
                    toast("Couldn't upload file...");
                    console.error("Upload failed:", error);
                }
            } else {
                toast("Please upload a PDF, DOC, or DOCX file");
            }
        }
    };

    return (
        <>
            {loading ? (
                <div className="w-full flex justify-center items-center">
                    <ClipLoader />
                </div>
            ) : (
                <Site
                    fileInputRef={fileInputRef}
                    loading={loading}
                    session={session}
                    handleFileChange={handleFileChange}
                />
            )}
            <ToastContainer />
        </>
    );
}
