"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import  Grid  from "@/components/Grid";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import {navItems} from '@/data/Index';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
		<div className="max-w-7xl w-full ">
            <FloatingNav navItems={navItems}/>
			<Hero/>
            <Grid/>
            <RecentProjects/>
            <Footer/>
		</div>
    </main>
  );
}
