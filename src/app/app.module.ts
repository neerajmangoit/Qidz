import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ExploreComponent } from './explore/explore.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdSectionComponent } from './ad-section/ad-section.component';
import { CarouselAComponent } from './carousel/carousel-a/carousel-a.component';
import { CarouselBComponent } from './carousel/carousel-b/carousel-b.component';
import { CarouselCComponent } from './carousel/carousel-c/carousel-c.component';
import { CarouselDComponent } from './carousel/carousel-d/carousel-d.component';
import { CarouselCategoryComponent } from './carousel/carousel-category/carousel-category.component';
import { BreadcrumbComponent } from './events/breadcrumb/breadcrumb.component';
import { TopBarComponent } from './events/top-bar/top-bar.component';
import { TermConditionComponent } from './events/term-condition/term-condition.component';
import { ActivityComponent } from './events/activity/activity.component';
import { ActivityDescriptionComponent } from './events/activity-description/activity-description.component';
import { ReviewComponent } from './events/review/review.component';
import { ScheduleComponent } from './events/schedule/schedule.component';
import { SideBarComponent } from './events/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    ExploreComponent,
    CarouselComponent,
    AdSectionComponent,
    CarouselAComponent,
    CarouselBComponent,
    CarouselCComponent,
    CarouselDComponent,
    CarouselCategoryComponent,
    BreadcrumbComponent,
    TopBarComponent,
    TermConditionComponent,
    ActivityComponent,
    ActivityDescriptionComponent,
    ReviewComponent,
    ScheduleComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
