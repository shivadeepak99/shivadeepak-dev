import { Hero } from "@/components/hero";
import { Building } from "@/components/building";
import { Projects } from "@/components/projects";
import { Philosophy } from "@/components/philosophy";
import { Stack } from "@/components/stack";
import { Background } from "@/components/background";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Building />
      <Projects />
      <Philosophy />
      <Stack />
      <Background />
      <Contact />
    </>
  );
}
