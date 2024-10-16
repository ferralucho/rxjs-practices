import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { SearchConfig, User } from './users.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';

describe('UsersService', () => {
  let service: UsersService;
  const mockUsers: User[] = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users successfully', (done) => {
    // Mock successful HTTP GET response
    const httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.returnValue(of(mockUsers));

    service.findUsers({ userName: '', resultLimit: 5 })
      .subscribe(users => {
        expect(users).toEqual(mockUsers);
        done();
      });
  });

  it('should handle error response', (done) => {
    // Mock error response
    const httpClient = TestBed.inject(HttpClient);
    const mockError = new HttpErrorResponse({ error: 'Something went wrong' });
    spyOn(httpClient, 'get').and.returnValue(throwError(mockError));

    service.findUsers({ userName: '', resultLimit: 5 })
      .subscribe(
        users => fail('Expected an error'),
        error => {
          expect(error).toEqual(mockError);
          done();
        }
      );
  });
});
