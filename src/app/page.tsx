import { Header } from "@/components/header";
import { getYamlContent } from '@/lib/yaml-loader'


export default async function Home() {
  const content = await getYamlContent("src/content/home.yaml");

  return (
    <>
      <Header />
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
