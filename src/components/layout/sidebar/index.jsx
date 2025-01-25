"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Menu, Layout } from "antd";
import { Title } from "../title";
const { Sider } = Layout;
import { colorConfig, resources } from "@/config";
// import { getAuthorizedResources } from "@/utilities/checkPermission";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState("");
  const [authorizedResources, setAuthorizedResources] = useState([]);
  const { data } = useSelector((state) => state.auth.authDetails);

  useEffect(() => {
    try {
      console.log("data ", data);

      if (data) {
        setAuthorizedResources(resources);
      }
    } catch (error) {
      console.error("Error while filtering authorized resources:", error);
      setAuthorizedResources([]); // Fallback to empty array
    }
  }, [data]);

  useEffect(() => {
    // Set the selected key based on the current route
    const path = window.location.pathname.substring(1); // Remove leading "/"
    setSelectedKey(path || "dashboard");
  }, []);

  const onClick = (e) => {
    setSelectedKey(e.key); // Set the selected menu key
    router.push(`/${e.key}`, undefined, { scroll: false });
  };

  return (
    <Sider
      breakpoint="lg"
      width={264}
      style={{
        fontWeight: "500",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
        scrollbarWidth: "thin",
        background: "#1A1A1D",
        // scrollbarColor: "unset",
      }}
      theme="dark"
      // trigger={true}
      collapsible
      // collapsedWidth={screens.xs && "0"}
      collapsed={collapsed}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
    >
      <div
        style={{
          width: "256px",
          padding: "0 16px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "64px",
          borderBottom: "none",
        }}
        // className="demo-logo-vertical"
      >
        <Title collapsed={collapsed} />
      </div>
      <Menu
        onClick={onClick}
        style={{
          height: "calc(100% - 64px)", // Adjust to account for header height
          overflow: "auto",
          scrollbarWidth: "none",
          fontWeight: "500",
          paddingLeft: "12px",
          paddingRight: "12px",
          marginTop: "8px",
          fontSize: "0.90rem",
          background: "#1A1A1D",
        }}
        theme="dark" // Ensures proper base styling
        title="title"
        selectedKeys={[selectedKey]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        items={authorizedResources}
      />
    </Sider>
  );
};
export default Sidebar;
