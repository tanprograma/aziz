import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Maintanance } from './pages/maintanance/maintanance';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Maintanance],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('amdiagnostics');
}
