import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { CollectionsComponent } from '../../components/collections/collections.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CollectionsComponent,
    WhyChooseUsComponent,
    GalleryComponent,
    ReviewsComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html'
})
export class HomePageComponent {}
