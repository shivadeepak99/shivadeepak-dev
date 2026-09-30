import { site } from "@/content/site";

// Sets one word of the identity line in ember italic.
export function Headline({ as: Tag = "h1" }: { as?: "h1" | "h2" }) {
  const [before, after] = site.line.split(site.emphasis);
  return (
    <Tag className="display rise">
      {before}
      <em>{site.emphasis}</em>
      {after}
    </Tag>
  );
}
