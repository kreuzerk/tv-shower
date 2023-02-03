import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {SpinnerComponent} from "./spinner.component";

@Component({
  selector: 'header',
  template: `
      <div
              class="bg-gray-900 h-12 w-full flex items-center pl-5 pr-5 text-white justify-between"
      >
          TV shower
          <div class="flex items-center">
            <span routerLink="/list/edit" class="cursor-pointer material-symbols-outlined mr-2">brush</span>
            <span routerLink="/list"
                  class="cursor-pointer material-symbols-outlined mr-2">list
      </span>
              <span routerLink="/add-show"
                    class="cursor-pointer material-symbols-outlined mr-2">add_circle
      </span>
            <spinner></spinner>
          </div>
      </div>
  `,
  imports: [RouterLink, SpinnerComponent],
  standalone: true,
})
export class HeaderComponent {}
