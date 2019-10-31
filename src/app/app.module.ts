import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { WorksComponent } from './works/works.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EssentialskillComponent } from './essentialskill/essentialskill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SkillsComponent,
    EducationComponent,
    TranscriptComponent,
    WorksComponent,
    ContactsComponent,
    EssentialskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
