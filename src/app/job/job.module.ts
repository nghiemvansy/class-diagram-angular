import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [JobListComponent, JobFormComponent, JobDetailComponent],
  imports: [
    CommonModule
  ]
})
export class JobModule { }
