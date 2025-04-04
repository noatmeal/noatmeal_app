import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div>
      <h1> A Bowl of Noatmeal </h1>
      <Navigation />
      
      <h1>Greetings!</h1>
      
      <p>
        I'm Noatmeal and this is my blog. My goal is to mostly write about 
        computer science, programming, and mathematics, but life has a way of 
        being distracting and so I'm bound to write about other things here and 
        there. 
      </p>
     
      <h1>Contact</h1> 
      <p>
         Send an email to Noatmeal 94 (at) gmail dot com
      </p>
       
      <p>
        I mostly use social media as a way to advertise what I'm doing here. So 
        I likely won't respond to any social media accounts you see by me in the 
        wild and would prefer that you just email me. However, if you're aware 
        of any interesting discussions that you'd like me to see or want me to 
        weigh in on, let me know and I'll take a look! 
      </p>
    </div>
  );
}
