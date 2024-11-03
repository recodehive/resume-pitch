import UploadButton from "@/components/ui/UploadButton";
import UserButton from "@/components/user-button";
import Image from "next/image";

export default function Site({
    fileInputRef,
    handleFileChange,
    session,
    loading,
}: any) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
                <header className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
                    <Image
                        src="/hero-resume.jpeg"
                        alt="Professional workspace with laptop and resume"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-4 sm:p-8 max-w-4xl">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                                Professional Resume Review
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
                                Transform your career prospects with expert
                                resume guidance
                            </p>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 w-full">
                    <div className="mb-12 sm:mb-20">
                        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                                Hi, I'm a professional resume reviewer with over
                                10 years of experience helping people land their
                                dream jobs.
                            </p>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                Your resume is your first impression on
                                potential employers. In today's competitive job
                                market, having a well-crafted, ATS-optimized
                                resume isn't just helpful – it's essential. Let
                                me help you stand out from the crowd.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="h-48 relative mb-6">
                                    <Image
                                        src="/ats-friendly.jpg"
                                        alt="ATS System Visualization"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                    ATS-Friendly Optimization
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Get past automated screening systems with
                                    confidence
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="h-48 relative mb-6">
                                    <Image
                                        src="/keywords.jpg"
                                        alt="Industry Keywords"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                    Industry-Specific Keywords
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Tailored to your target role and industry
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="h-48 relative mb-6">
                                    <Image
                                        src="/formatting.jpg"
                                        alt="Professional Format"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                    Professional Formatting
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Clean, modern, and easy to read designs
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="h-48 relative mb-6">
                                    <Image
                                        src="/achievements.jpg"
                                        alt="Achievement Highlights"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                    Achievement Highlighting
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Showcase your impact and measurable results
                                </p>
                            </div>
                        </div>
                    </div>

                    <UploadButton
                        handleFileChange={handleFileChange}
                        fileInputRef={fileInputRef}
                        loading={loading}
                        session={session}
                    />
                </main>

                <footer className="bg-gray-50 dark:bg-gray-900 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex gap-8 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                            <a
                                href="#"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
