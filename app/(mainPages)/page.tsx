import { Routes, routesType } from "@/routes/routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-secondary flex flex-col items-center justify-center h-screen">
      <h1 className="text-textMain">
        welcome to nerd studio application lets hit one of the sections below!
      </h1>
      <ul className="flex rounded-md gap-x-5 bg-primary p-4 mt-6">
        {Routes.map((item: routesType) => (
          <li className="text-textMain hover:underline" key={item.id}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
