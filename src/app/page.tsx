import { ToggleLightAndDark } from "@/components/toggle-light-and-dark";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center font-roboto">
      <span>And so it begins...</span>
      <ToggleLightAndDark></ToggleLightAndDark>
    </div>
  );
}
