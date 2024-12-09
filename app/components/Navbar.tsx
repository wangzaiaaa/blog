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
            >
              <Menu.Item key="/" icon={<HomeOutlined />}>
                <Link href="/">主页</Link>
              </Menu.Item>
              <Menu.Item key="/portfolio" icon={<AppstoreOutlined />}>
                <Link href="/portfolio">作品集</Link>
              </Menu.Item>

              <Menu.Item key="/tools" icon={<ToolOutlined />}>
                <Link href="/tools">工具集</Link>
              </Menu.Item>
              <Menu.Item key="/blog" icon={<ReadOutlined />}>
                <Link href="/blog">博客</Link>
              </Menu.Item>

              <Menu.Item key="/about" icon={<UserOutlined />}>
                <Link href="/about">关于我</Link>
              </Menu.Item>
            </Menu>
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