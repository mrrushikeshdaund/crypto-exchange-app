import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from '../components/hero/hero.component';
import { StatsComponent } from '../components/stats/stats.component';
import { FeaturesComponent } from '../components/features/features.component';
import { MapComponent } from '../components/map/map.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    FooterComponent,
    HeroComponent,
    StatsComponent,
    FeaturesComponent,
    MapComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
