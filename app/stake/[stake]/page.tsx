// app/stake/[stake]/page.tsx (Server Component)
"use client";

import { useParams, useSearchParams } from "next/navigation";
import { WebSocketProvider } from "../../components/WebSocketProvider";
import LobbyScreen from "../../components/LobbyScreen";
import Header from "@/app/components/Header";

export default function StakePage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const stake = Number(params.stake);
  const telegramId = searchParams.get("user") || "guest";

  console.log("stake:", stake);
  console.log("telegramId:", telegramId);

  if (!params.stake || isNaN(stake)) {
    return <div>Invalid stake</div>;
  }

  return (
    <WebSocketProvider stake={stake} telegramId={telegramId}>
      <Header telegramId={telegramId} />
      <LobbyScreen />
    </WebSocketProvider>
  );
}
