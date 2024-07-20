"use client";

import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";
import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Sidebar() {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
          <div className="image">
            <Image width={70} height={70} src={"/avatar1.png"} alt="profile" />
          </div>
          <h1>
            <span>Sin</span>
            <span>Rostro</span>
          </h1>
        </div>
      </div>
      <ul className={`nav-items`}>
        {menu.map((item) => (
          <li
            className={`nav-item  ${pathname === item.link ? "active" : ""}`}
            onClick={() => handleClick(item.link)}
          >
            {item.icon}
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};

  border-radius: 1rem;
`;

export default Sidebar;
