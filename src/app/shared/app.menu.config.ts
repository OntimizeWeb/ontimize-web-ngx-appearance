import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {
    id: 'appearance', name: 'APPERANCE', icon: 'web', opened: true,
    items: [
      { id: 'appearance-standard', name: 'STANDARD', route: '/main/appearance/standard',icon: 'input' },
      { id: 'appearance-fill', name: 'FILL', route: '/main/appearance/fill',icon:'featured_video' },
      { id: 'appearance-outline', name: 'OUTLINE', route: '/main/appearance/outline',icon: 'tab' },
    ]
  }
];
