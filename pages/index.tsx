
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/router";

export default function EchoesHome() {
  const router = useRouter();

  const handleLaunchCase = () => {
    router.push("/cases/jackson-vs-atlantic");
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 grid gap-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Echoes</h1>
        <p className="text-lg text-gray-600">Monitoring the Echoes of Justice</p>
      </header>

      <div className="flex justify-center">
        <div className="relative w-full max-w-xl">
          <Input placeholder="Search cases, parties, or keywords..." className="pr-10" />
          <Search className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Echoes Monitor</h2>
            <p>Track live updates across your litigation universe.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Echoes Dockets</h2>
            <p>Access case filings, court actions, and official records.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Echoes News</h2>
            <p>Latest media coverage, YouTube reports, and updates.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Echoes Chat</h2>
            <p>Ask GPT to analyze, summarize, or explain any filing.</p>
          </CardContent>
        </Card>
      </section>

      <div className="text-center mt-8">
        <Button className="px-6 py-2 text-lg" onClick={handleLaunchCase}>
          Launch Your First Case
        </Button>
        <p className="mt-2 text-sm text-gray-500">Jackson v. Atlantic Records</p>
      </div>
    </div>
  );
}
