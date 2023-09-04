import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  aboutus = `Welcome to AgroAI, your one-stop destination for revolutionizing sustainable agriculture through the integration of fish farming, urban agriculture, and 
  advanced AI technologies. We are a dedicated team of passionate individuals from Addis Ababa University (AAU) and Arba Minch University(AMU) in Ethiopia. 
  Together, we've come together for the African Generative AI Hackathon hosted by A2SV, with a shared mission to transform the way food is produced and nourish 
  communities while embracing cutting-edge solutions.`;

  vision = `At AgroAI, we believe in a greener tomorrow where agriculture thrives in harmony with nature and technology. 
            Our vision is to empower individuals, urban communities, and aspiring farmers to unlock the full potential of 
            integrated fish farming and urban agriculture. By leveraging AI-driven insights, sustainable practices, and 
            community engagement, we aim to foster a self-sufficient and eco-conscious approach to food production.`;

  whyus = `Our team's diverse expertise and backgrounds provide a unique advantage in addressing the challenges of sustainable 
  food production. Our members from AAU and AMU bring a blend of innovation, scientific knowledge, and community-driven insights t
  o the table. With a shared commitment to leveraging AI for positive change, we're poised to drive tangible impact at the intersection of
   agriculture and technology.`;

  joinus = `As we embark on this exciting journey, we invite you to explore our website, engage in discussions, and discover the limitless possibilities of integrated 
            fish farming, urban agriculture, and AI integration. Together, we can make a meaningful impact on food systems, promote environmental consciousness, and 
            create a more resilient and nourished world.`;

  thank = `Thank you for joining us on this transformative mission!`;
}
