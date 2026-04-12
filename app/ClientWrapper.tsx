// app/ClientWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
// import QuestionScreen from "./Components/QuestionScreen";

type ScreenState = "question" | "loading" | "app";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {/* {screen === "question" && (
        <QuestionScreen onContinue={() => setScreen("loading")} />
      )} */}

      {screen === "loading" && <Loader />}

      {screen === "app" && (
        <div className="animate-fadeIn">{children}</div>
      )}
    </>
  );
}