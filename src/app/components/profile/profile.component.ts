import { Component } from '@angular/core';

/**
 * Componente de perfil
 * Exibe avatar, nome e bio do usuário
 */
@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // Dados do perfil - personalize com suas informações
  profileData = {
    name: 'Seu Nome',
    bio: 'Desenvolvedor Full Stack | Angular Specialist',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
  };
}
