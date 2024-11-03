import { ThemeSwitcher } from "./ui/Theme";
import UserButton from "./user-button";

export default function Header() {
    return (
      <header className="bg-white dark:bg-gray-800">
            <div className="flex h-16 w-full items-center justify-end pr-4 sm:pr-6">
                <div className="flex items-center gap-6">
                    <ThemeSwitcher />
                    <UserButton />
                </div>
            </div>
        </header>
    );
}
