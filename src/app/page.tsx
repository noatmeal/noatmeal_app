import { ToggleLightAndDark } from "@/components/toggle-light-and-dark";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center font-roboto">
      <div>
        <span>Toggle Light and Dark Mode: </span>
        <ToggleLightAndDark />
      </div>
    </div>
  );
}
