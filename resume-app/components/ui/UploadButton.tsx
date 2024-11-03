// @ts-nocheck

import { auth } from "@/auth";
import { Button } from "./button";
import { MutableRefObject } from "react";
import { toast } from "react-toastify";

interface UploadButtonProps {
    fileInputRef: MutableRefObject<HTMLInputElement | null>;
    loading: boolean;
}

export function UploadButton({ fileInputRef, loading, session, handleFileChange }: any) {
    const handleUploadClick = () => {
        if (loading || !session) {
          toast("Please sign in to upload your resume.")
          return;
        }

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                    Ready to Transform Your Resume?
                </h2>
                <div 
                    className="bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/20 rounded-lg sm:rounded-xl p-6 sm:p-12 text-center" 
                    onClick={handleUploadClick}
                    onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        if (!session) {
                            toast("Please sign in to upload your resume.");
                            return;
                        }

                        handleFileChange(e, true);
                    }}
                >
                    <div className="mb-4 sm:mb-6">
                        <svg
                            className="mx-auto h-12 sm:h-20 w-12 sm:w-20 text-white/80"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p className="text-lg sm:text-xl mb-2 sm:mb-3">
                        Drag and drop your resume here, or click to browse
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 mb-6 sm:mb-8">
                        Supported formats: PDF, DOC, DOCX
                    </p>
                    <div className="flex gap-4 sm:gap-6 items-center flex-col sm:flex-row justify-center">
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadButton;
