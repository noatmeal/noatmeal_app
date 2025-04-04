import { ModeToggle } from "@/components/light-dark-toggle"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      
      <h1 className="text-4xl font-bold">Welcome to My Site</h1>
      
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
        rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
        non est bibendum non venenatis nisl tempor.
      </p>
      
      <p className="text-lg">
        Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper 
        est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, 
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
      </p>
    </div>
  );
}
