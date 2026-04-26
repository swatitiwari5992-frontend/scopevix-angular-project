import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-career',
  imports: [CommonModule],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  careerTitle: string = 'Welcome To Scopevix';
  careerSubTitle: string = 'Discover Careers through real journeys,not boring advice.';
  careerDescription: string = 'Watch reel-style career stories from students, professionals, founders and industry experts.';
  exploreBtn: string = 'explore career reels';
  startBtn: string = 'start career discovery';
  browseBtn: string = 'browse all career paths';

  items = [
    { image: 'https://picsum.photos/400/300?random=1' },
    { image: 'https://picsum.photos/400/300?random=2' },
    { image: 'https://picsum.photos/400/300?random=3' },
    { image: 'https://picsum.photos/400/500?random=4' },
    { image: 'https://picsum.photos/400/600?random=5' },
    { image: 'https://picsum.photos/800/600?random=6' },
    { image: 'https://picsum.photos/400/500?random=7' },
    { image: 'https://picsum.photos/400/300?random=8' }
  ];
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit() {
    // Relying on pure CSS columns for Masonry layout instead of masonry-layout.js
  }

}
