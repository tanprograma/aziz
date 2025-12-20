import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  services = [
    {
      icon: '🩻',
      title: 'Digital X-Ray',
      description:
        'High-resolution digital radiography for fast, accurate diagnosis with minimal radiation exposure.',
    },
    {
      icon: '🧠',
      title: 'MRI & CT Scan',
      description:
        'Advanced cross-sectional imaging for brain, spine, and full body diagnostic assessment.',
    },
    {
      icon: '🤰',
      title: 'Ultrasound Imaging',
      description:
        'Obstetric, abdominal, vascular and soft tissue ultrasound with real-time reporting.',
    },
    {
      icon: '❤️',
      title: 'Cardiac Imaging',
      description:
        'Non-invasive cardiac imaging for functional and structural assessment of the heart.',
    },
  ];
  benefits = [
    'Consultant radiologists with sub-specialty training',
    'Latest-generation imaging equipment and PACS system',
    'Fast reporting times and secure result sharing',
    'Seamless integration with referring physicians',
    'Extended hours and flexible appointment scheduling',
  ];
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  getFullYear() {
    return new Date().getFullYear();
  }
}
