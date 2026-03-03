import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosProductos } from './todos-productos';

describe('TodosProductos', () => {
  let component: TodosProductos;
  let fixture: ComponentFixture<TodosProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosProductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
