import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { InsertStudentComponent } from '../insert-student/insert-student.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandeativeService implements CanDeactivate<InsertStudentComponent> {
insertForm;
  constructor() { }
  canDeactivate(
    component: InsertStudentComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {


      if (component.formDirty) {
        alert("calling deactivate")
              return confirm("are you want to exit")

      }
     //  return window.alert("are you sure ")
  }
}
