"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

// Rendered after mount so server and client never disagree about the time.
export function Clock() {
  const [t, setT] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: site.tz,
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span>{t ? `It is ${t} in India` : "India · UTC+5:30"}</span>;
}
