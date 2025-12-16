import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { LINKS_DATA } from './data/links.data';

/**
 * Componente principal da aplicação
 * Integra Profile e LinksList para criar o clone do Linktree
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, LinksListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Dados dos links importados do arquivo de dados
  links = LINKS_DATA;
  
  title = 'Linktree Clone';
}
