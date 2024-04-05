"use client";
import "./style.css";
import React from "react";
import { Routes, routesType } from "@/routes/routes";
import { getPathName } from "@/utils/getPathName";
import Link from "next/link";

export default function Sidebar() {
  const isActive = (path: string) => path === getPathName();

  return (
    <div className="bg-secondary w-2/12 p-7 flex flex-col gap-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Nerd Studio</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaPZRKnj5PUvua4rmzKxPPpuDaHrdfkdgEkFs9CDSkQ&s"
          alt="profile"
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>
      <ul className="flex flex-col items-center gap-y-3 px-1">
        {Routes.map((item: routesType) => (
          <Link
            className={`linkItem ${
              isActive(item.href) ? "activeItem bg-hoverItemColor" : ""
            }`}
            key={item.id}
            href={item.href}
            replace
          >
            {item.icon}
            <span className="font-extrabold">{item.label}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
