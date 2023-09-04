import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  files = [
    {head: 'Optimized Resource Use', text: 'Maximize water and nutrient utilization by combining fish farming and urban crops.', img: '../../assets/image3.jpeg'},
    {head: 'Sustainable Food Production', text: 'Create a closed-loop ecosystem that reduces waste and conserves resources.', img: '../../assets/image2.jpeg'},
    {head: 'Engage the Community', text : 'Foster a network of urban farmers and fish enthusiasts to share knowledge and experiences.', img: '../../assets/image9.jpeg'}
  ]

  solution = [
    {img: '../../assets/image3.jpeg', tittle: 'AI-Driven Tools', text: 'Access real-time insights and recommendations to optimize your farming practices.'},
    {img: '../../assets/image3.jpeg', tittle: 'Educational Resources', text: 'Explore guides, tutorials, and courses to enhance your integrated farming skills.'},
    {img: '../../assets/image3.jpeg', tittle: 'Community Forums', text: 'Join discussions, share stories, and learn from a diverse community of like-minded individuals.'}
  ]

  steps = [
    {img: '../../assets/image3.jpeg', text: 'Start by setting up a fish tank with your chosen fish species.'},
    {img: '../../assets/image3.jpeg', text: 'Channel nutrient-rich water from the fish tank to nourish your urban crops.'},
    {img: '../../assets/image3.jpeg', text: 'Use AI insights to optimize water usage, feeding schedules, and crop growth.'}
  ]

  stories = [
    {text: 'Thanks to AgroAI, I transformed my rooftop into a thriving oasis of fresh produce and healthy fish!', author : '- Urban Farmer Jane Doe'},
    {text: 'Integrating fish farming with my urban garden was a game-changer. Now I enjoy organic veggies and fish right at home!', author : '- Eco-Enthusiast John Smith'}
  ]
}
