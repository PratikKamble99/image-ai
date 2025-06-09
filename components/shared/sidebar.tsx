"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src={"/assets/images/logo-text.svg"}
            alt="logo"
            height={28}
            width={180}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((nav) => {
                const isActive = nav.route === pathname;
                return (
                  <li
                    key={nav.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-700 text-white"
                        : "text-gray-700 hover:bg-slate-300"
                    } `}
                  >
                    <Link href={nav.route} className="sidebar-link">
                      <Image
                        src={nav.icon}
                        alt={nav.label}
                        width={24}
                        height={24}
                        className={`${
                          isActive && "brightness-200 text-gray-700"
                        }`}
                      />
                      {nav.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((nav) => {
                const isActive = nav.route === pathname;
                return (
                  <li
                    key={nav.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-700 text-white"
                        : "text-gray-700 hover:bg-slate-300"
                    } `}
                  >
                    <Link href={nav.route} className="sidebar-link">
                      <Image
                        src={nav.icon}
                        alt={nav.label}
                        width={24}
                        height={24}
                        className={`${
                          isActive && "brightness-200 text-gray-700"
                        }`}
                      />
                      {nav.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button className="bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
