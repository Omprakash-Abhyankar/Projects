import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlshorntnerhomeComponent } from './urlshorntnerhome.component';

describe('UrlshorntnerhomeComponent', () => {
  let component: UrlshorntnerhomeComponent;
  let fixture: ComponentFixture<UrlshorntnerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrlshorntnerhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlshorntnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
