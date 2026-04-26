import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface NavItem {
  label: string;
  route: string;
}


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navItems: NavItem[] = [
    { label: 'Price', route: '/price' },
    { label: 'Login', route: '/login' }
  ];
}
