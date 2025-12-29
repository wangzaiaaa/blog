"use client";

import Link from "next/link";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  ToolOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const items = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link href="/">主页</Link>,
    },
    {
      key: "/portfolio",
      icon: <AppstoreOutlined />,
      label: <Link href="/portfolio">作品集</Link>,
    },
    {
      key: "/tools",
      icon: <ToolOutlined />,
      label: <Link href="/tools">工具集</Link>,
    },
    {
      key: "/blog",
      icon: <ReadOutlined />,
      label: <Link href="/blog">博客</Link>,
    },
    {
      key: "/about",
      icon: <UserOutlined />,
      label: <Link href="/about">关于我</Link>,
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-10 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex-grow flex justify-center">
            <Menu
              mode="horizontal"
              selectedKeys={[pathname || '/']}
              className="flex justify-center bg-transparent border-b-0"
              style={{ width: "auto" }}
              items={items}
            />
          </div>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;