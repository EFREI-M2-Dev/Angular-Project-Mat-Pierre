import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobsFormComponent } from './create-jobs-form.component';

describe('CreateJobsFormComponent', () => {
  let component: CreateJobsFormComponent;
  let fixture: ComponentFixture<CreateJobsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateJobsFormComponent]
    });
    fixture = TestBed.createComponent(CreateJobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
