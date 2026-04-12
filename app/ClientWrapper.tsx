"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Components/Loader";

type ScreenState = "loading" | "app";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [screen, setScreen] = useState<ScreenState | null>(null);

  useEffect(() => {
    // Only run loader on home page
    if (pathname !== "/") {
      setScreen("app");
      return;
    }

    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setScreen("app");
    } else {
      sessionStorage.setItem("hasVisited", "true");
      setScreen("loading");
      setTimeout(() => {
        setScreen("app");
      }, 6400);
    }
  }, [pathname]);

  // Prevent hydration mismatch
  if (screen === null) return null;

  return (
    <>
      {screen === "loading" && <Loader />}
      {screen === "app" && (
        <div className="animate-fadeIn">{children}</div>
      )}
    </>
  );
}