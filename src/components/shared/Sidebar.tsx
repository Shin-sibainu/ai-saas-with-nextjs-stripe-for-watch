"use client";

// https://github.com/adrianhajdin/ai_saas_app/blob/main/components/shared/Sidebar.tsx
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ImageIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white shadow-md p-5 md:flex">
      <div className="flex flex-col gap-4">
        <Link href={"/"} className="flex items-center gap-2 md:py-2">
          <Image
            src={"/assets/images/logo-text.svg"}
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="h-full flex-col justify-between flex gap-4">
          <SignedIn>
            <ul className="w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`px-4 py-2 font-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all 
                     group ${
                       isActive
                         ? "bg-gray-600 text-white"
                         : "text-gray-700 hover:bg-gray-200 hover:shadow-inner"
                     }`}
                  >
                    <Link className="flex gap-4 p-4" href={link.route}>
                      <ImageIcon />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`px-4 py-2 font-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-gray-200 hover:shadow-inner group ${
                      isActive ? "bg-gray-600 text-white" : "text-gray-700"
                    }`}
                  >
                    <Link className="flex gap-4 p-4" href={link.route}>
                      <Settings />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="cursor-pointer p-4 pl-8">
                <UserButton afterSignOutUrl="/sign-in" />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Link href={"/sign-in"}>Login</Link>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
