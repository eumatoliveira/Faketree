import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '../../models/link.model';
import { LinkButtonComponent } from '../link-button/link-button.component';

/**
 * Componente container para lista de links
 * Renderiza múltiplos LinkButtonComponent com animações escalonadas
 */
@Component({
  selector: 'app-links-list',
  standalone: true,
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './links-list.component.html',
  styleUrl: './links-list.component.css'
})
export class LinksListComponent {
  @Input() links: Link[] = [];

  /**
   * Manipula o clique em um link
   * Pode ser usado para analytics ou outras ações
   */
  onLinkClicked(link: Link): void {
    console.log('Link selecionado no container:', link);
    // Aqui você pode adicionar lógica adicional, como:
    // - Enviar para serviço de analytics
    // - Atualizar contadores
    // - Mostrar notificações
  }

  /**
   * Retorna o delay de animação para cada item
   * Cria efeito de cascata na entrada dos links
   */
  getAnimationDelay(index: number): string {
    return `${index * 0.1}s`;
  }
}
