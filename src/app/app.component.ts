import { AfterViewInit, Component, HostListener } from '@angular/core';
import barba from '@barba/core';
import anime from 'animejs/lib/anime.es.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  name = 'Muhammad Hamza Sajid';
  profilePicture = 'assets/pfp.jpg';
  titles = [
    'Full-Stack Web Developer',
    'Cross-Platform Specialist',
    'Scalable Solutions Architect',
    'Full-Stack Web Developer',
    'Cross-Platform Specialist',
    'Scalable Solutions Architect',
    'Full-Stack Web Developer',
    'Cross-Platform Specialist',
    'Scalable Solutions Architect',
  ];
  summary = 'As a versatile Full-Stack Web Developer, I specialize in creating cross-platform applications. My expertise spans Angular, Node.js with MongoDB, Express, NestJS, PostgreSQL, Ionic framework for mobile apps, and Electron for desktop apps. I have a proven track record of designing and implementing scalable, user-friendly solutions that meet diverse business needs.';

  skills = ['Angular', 'Python', 'Django', 'Ionic Capacitor', 'PostgreSQL', 'NestJS', 'MongoDB', 'Electron'];

  experience = [
    {
      title: 'Senior Web Developer',
      period: 'Mar 2024 - Nov 2024',
      company: 'HurTech, Bahawalpur, Pakistan',
      tasks: [
        'Developed and maintained Angular web applications, ensuring optimal performance and user experience.',
        'Implemented front-end features using Angular, enhancing functionality and user engagement.',
        'Implemented backend services with NestJS and PostgreSQL, improving data management.',
        'Collaborated on full-stack development, integrating Angular with NestJS and PostgreSQL.'
      ]
    },
    {
      title: 'Full-Stack Web Developer',
      period: 'Nov 2024 - Present',
      company: 'Freelancer, Bahawalpur, Pakistan',
      tasks: [
        'Integrated third-party APIs into the web applications for additional features and functionality.',
        'Built and integrated RESTful APIs for internal and external use, improving data connectivity and application scalability.',
        'Validated code for proper structuring, security and compatibility with different browsers, devices or operating systems.',
        'Integrated UI elements such as charts, tables, forms and other interactive features into the application using Angular Material.'
      ]
    }
  ];

  projects = [
    {
      name: 'HR Management System',
      period: 'Jun 2024 - Sep 2024',
      tech: 'Angular, Material-UI, Translation',
      description: 'Contributed to an HR system for CHU de Cocody, France, streamlining personnel management and payroll.',
      liveUrl: 'https://hr-angular-front.vercel.app/overview',

    },
    {
      name: 'Drag-and-Drop Node System',
      period: 'Sep 2024',
      tech: 'Angular, Tailwind CSS, RxJS, TypeScript',
      description: 'Developed an interactive node editor with drag-and-drop functionality.',
      liveUrl: 'https://ngx-vflow.vercel.app/',
      githubUrl: 'https://github.com/muhammadhamx/ngx-vFflow'
    },
    {
      name: 'Foodify',
      period: 'Dec 2023 - Present',
      tech: 'Angular, Tailwind CSS, Chart.js, TypeScript',
      description: 'An app for restaurants to manage orders with Admin, User, and Chef sections.',
      liveUrl: 'https://foodify-three.vercel.app/floors',
      githubUrl: 'https://github.com/muhammadhamx/Foodify'
    },
    {
      name: 'Costify',
      period: 'Nov 2024 - Present',
      tech: 'Angular, Ionic, PouchDB, Chart.js, RxJS',
      description: 'An expense manager mobile app with budget tracking and notifications.',
      liveUrl: 'https://costify-six.vercel.app/',
      githubUrl: 'https://github.com/muhammadhamx/Costify'
    }
  ];

  contact = {
    email: 'muhammadhamzasajid6@gmail.com',
    phone: '+923478866012',
    github: 'https://github.com/muhammadhamx'
  };

  ngAfterViewInit() {
    barba.init({
      transitions: [
        {
          name: 'amazing-transition',
          leave(data: any) {
            return anime({
              targets: data.current.container,
              opacity: [1, 0],
              translateY: [0, -50],
              easing: 'easeOutExpo',
              duration: 800,
              complete: () => data.current.container.remove()
            }).finished;
          },
          enter(data: any) {
            return anime({
              targets: data.next.container,
              opacity: [0, 1],
              translateY: [50, 0],
              easing: 'easeInExpo',
              duration: 800
            }).finished;
          }
        }
      ]
    });

    this.animateBackground();
    this.animateTyping();
    this.animateSections();
    this.animateButtons();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.animateSections();
  }

  animateBackground() {
    const shapeMorph = anime.timeline({
      targets: '.morphing-shape path',
      easing: 'easeInOutSine',
      duration: 2000,
      loop: true
    });

    shapeMorph
      .add({
        d: [
          { value: 'M50 10 L90 90 L10 90 Z' },
          { value: 'M20 20 L80 20 L80 80 L20 80 Z' }
        ],
        rotate: 90,
        scale: 1.1
      })
      .add({
        d: { value: 'M50 10 L90 40 L70 80 L30 80 L10 40 Z' },
        rotate: 180,
        scale: 1.2
      })
      .add({
        d: { value: 'M50 10 L90 90 L10 90 Z' },
        rotate: 360,
        scale: 1
      });

    const path = document.querySelector('.line-drawing path');
    const text = document.querySelector('.line-drawing text');

    if (path && text) {
      anime({
        targets: path,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 2000,
        loop: true,
        direction: 'alternate'
      });

      anime({
        targets: text,
        opacity: [0, 1],
        translateY: [-10, 0],
        rotate: [-5, 5],
        easing: 'easeInOutSine',
        duration: 1500,
        loop: true,
        direction: 'alternate',
        delay: 1000
      });
    }
  }

  animateTyping() {
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
      const timeline = anime.timeline({
        loop: true
      });

      this.titles.forEach((title) => {
        timeline
          .add({
            targets: textElement,
            duration: title.length * 100,
            update: (anim) => {
              const progress = Math.floor((anim.progress * title.length) / 100);
              textElement.textContent = title.substring(0, progress);
            },
            easing: 'linear'
          })
          .add({
            duration: 1000,
            easing: 'linear'
          })
          .add({
            targets: textElement,
            duration: 500,
            opacity: [1, 0],
            complete: () => (textElement.textContent = '')
          })
          .add({
            targets: textElement,
            opacity: [0, 1],
            duration: 500
          });
      });

      anime({
        targets: '.cursor',
        opacity: [1, 0],
        duration: 500,
        easing: 'steps(2)',
        loop: true
      });
    }
  }

  animateSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (isVisible && !section.classList.contains('animated')) {
        const direction = index % 2 === 0 ? -100 : 100;

        anime({
          targets: section.querySelectorAll('.profile-pic, h1'),
          translateX: [direction, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 800
        });

        anime({
          targets: section.querySelectorAll('h2, p, li, .job, .project, .live-btn, .github-btn'),
          translateX: [direction, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 800,
          delay: anime.stagger(200, { start: 200 })
        });

        section.classList.add('animated');
      }
    });
  }

  animateButtons() {
    anime({
      targets: '.scroll-btn, .live-btn, .github-btn',
      scale: [1, 1.1],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 1000
    });
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}