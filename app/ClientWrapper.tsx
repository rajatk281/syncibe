"use client";

import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

type ScreenState = "loading" | "app";

export default function ClientWrapper({children}: { children: React.ReactNode;}) {
  const [screen, setScreen] = useState<ScreenState>("loading");
  // When loading starts → auto move to app
  useEffect(() => {
    if (screen === "loading") {
      const timer = setTimeout(() => {
        setScreen("app");
      }, 6400);

      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <>
      {screen === "loading" && <Loader />}

      {screen === "app" && (
        <div className="animate-fadeIn">{children}</div>
      )}
    </>
  );
}