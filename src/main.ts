import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';


import { AppModule } from './app/app.module';

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};

document.getElementById('toggle')?.addEventListener('click', toggleDarkMode);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
