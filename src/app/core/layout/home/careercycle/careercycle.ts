import { Component } from '@angular/core';

@Component({
  selector: 'app-careercycle',
  imports: [],
  templateUrl: './careercycle.html',
  styleUrl: './careercycle.css',
})
export class Careercycle {
  flytitle: string = "Complete Career Horizon";
  flysubtitle: string = "The Mentorship Flywheel";
  flycentertext: string = "Minimal futuristic mentorship ecosystem";
  flynodes: any[] = [
    { title: "UG Explorer", icon: "fa-solid fa-graduation-cap" },
    { title: "PG Specialist", icon: "fa-solid fa-user-graduate" },
    { title: "PhD Knowledge Creator", icon: "fa-solid fa-award" },
    { title: "Early Professional Apprentice", icon: "fa-solid fa-briefcase" },
    { title: "Mid-Level Professional", icon: "fa-solid fa-users-gear" },
    { title: "Senior Professional", icon: "fa-solid fa-compass" },
    { title: "Founder", icon: "fa-solid fa-rocket" },
    { title: "Veteran", icon: "fa-solid fa-tree" }
  ];
}
