import { Navigation } from "@/components/navigation"
import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

const contentPath = path.join(process.cwd(), 'src/content/home.yaml')
const content = yaml.parse(fs.readFileSync(contentPath, 'utf8'))

export default function Home() {
  return (
    <div>
      <h1>{content.title}</h1>
      <Navigation />
      
      <h1>{content.greetings.title}</h1>
      <p>{content.greetings.content}</p>
     
      <h1>{content.contact.title}</h1> 
      <p>Send an email to {content.contact.email}</p>
      <p>{content.contact.content}</p>
    </div>
  );
}
