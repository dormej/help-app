import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { BathsComponent } from './baths/baths.component';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: StartPageComponent,
        children: [
        //   {
        //     path: '',
        //     pathMatch: 'full',
        //     redirectTo: 'start',
        //   },
          // {
          //   path: 'start',
          //   loadChildren: () => import('./start-page/start-page.module').then((m) => m.StartPageModule),
          // },
          {
            path: 'baths',
            component: BathsComponent,
          }
        ]
      }
    ]
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
