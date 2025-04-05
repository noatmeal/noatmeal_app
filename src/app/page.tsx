import { Header } from "@/components/header";
import { getYamlContent } from "@/lib/yaml-loader";

const PAGE_CONTENT_FILENAME = "src/content/home.yaml";

export default async function Home() {
  const content = await getYamlContent(PAGE_CONTENT_FILENAME);

  return (
    <>
      <Header pageContentFilename={PAGE_CONTENT_FILENAME} />
      <div>
        <h1>{content.greetings.title}</h1>
        <p>{content.greetings.content}</p>

        <h1>{content.contact.title}</h1>
        <p>{content.contact.email}</p>
        <p>{content.contact.noSocialMedia}</p>
      </div>
    </>
  );
}
