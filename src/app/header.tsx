import { ToggleLightAndDark } from "@/components/toggle-light-and-dark";

const Header = () => {
  return (<div className="flex flex-row justify-between items-center">
    <div className="flex space-x-4">
      <div>Blog</div>
      <div>About</div>
    </div>
    <div>
      <ToggleLightAndDark />
    </div>
  </div>
  );
}

export default Header
