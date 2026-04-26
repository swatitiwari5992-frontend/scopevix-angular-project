import { Component, signal } from '@angular/core';
import { Subscribe } from './core/layout/home/subscribe/subscribe';
import { Navbar } from './core/layout/home/navbar/navbar';
import { BrandLogo } from './core/layout/home/brand-logo/brand-logo';
import { Parallex } from './core/layout/home/parallex/parallex';
import { Career } from './core/layout/home/career/career';
import { Newsletter } from './core/layout/home/newsletter/newsletter';
import { Footer } from './core/layout/home/footer/footer';
import { Careercycle } from './core/layout/home/careercycle/careercycle';

@Component({
  selector: 'app-root',
  imports: [Navbar, Careercycle, Subscribe, BrandLogo, Parallex, Career, Newsletter, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('scopevix');
}
