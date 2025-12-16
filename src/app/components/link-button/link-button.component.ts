import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '../../models/link.model';

/**
 * Componente reutilizável de botão de link
 * Recebe um link como input e emite evento ao clicar
 */
@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css'
})
export class LinkButtonComponent {
  @Input() link!: Link;
  @Output() linkClick = new EventEmitter<Link>();

  /**
   * Manipula o clique no link
   * Emite evento e registra analytics (console.log para demonstração)
   */
  onLinkClick(event: MouseEvent): void {
    event.preventDefault();
    
    // Analytics tracking (pode ser substituído por serviço real)
    console.log('Link clicado:', this.link.title, this.link.url);
    
    // Emite evento para componente pai
    this.linkClick.emit(this.link);
    
    // Abre link em nova aba
    window.open(this.link.url, '_blank', 'noopener,noreferrer');
  }
}
