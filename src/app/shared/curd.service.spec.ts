import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { configureTestSuite } from 'ng-bullet';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;
  let httpClientStub;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [
        CrudService,
        { provide: HttpClient, useValue: {}}
      ]
    });
    initStubs();
  });

  function initStubs(){
    httpClientStub = TestBed.get(HttpClient);
    httpClientStub.post = jasmine.createSpy('post');
    httpClientStub.put = jasmine.createSpy('put');
    httpClientStub.delete = jasmine.createSpy('delete');
    httpClientStub.get = jasmine.createSpy('get');
  }

  beforeEach(inject([CrudService], (_service: CrudService) => {
    service = _service;
  }));

  it('should inject the service', () => {
    expect(service).toBeDefined();
  });

  describe('add', () => {
    it('should add entity and return an observable', () => {
      // Given
      const entity = {
        entity_name: 'this is my name'
      };
      const url = 'this is an url';
      service.url = url;
      const data = {};
      httpClientStub.post.and.returnValue(of(data));

      // When
      const result = service.add(entity);

      // Then
      expect(httpClientStub.post).toHaveBeenCalledWith(url, entity);
      expect(result).toEqual(of(data));
    });
  });

  describe('update', () => {
    it('should update entity and return an observable', () => {
      // Given
      const entity = {
        entity_name: 'this is my name'
      };
      const url = 'this is an url';
      service.url = url;
      const data = {};
      httpClientStub.put.and.returnValue(of(data));

      // When
      const result = service.update(entity);

      // Then
      expect(httpClientStub.put).toHaveBeenCalledWith(url, entity);
      expect(result).toEqual(of(data));
    });
  });


  describe('delete', () => {
    it('should delete entity by id and return an observable', () => {
      // Given
      const id = 10;
      const url = 'this is an url';
      service.url = url;
      const data = {};
      httpClientStub.delete.and.returnValue(of(data));

      // When
      const result = service.delete(id);

      // Then
      expect(httpClientStub.delete).toHaveBeenCalledWith(url + `/${id}`);
      expect(result).toEqual(of(data));
    });
  });

  describe('getAll', () => {
    it('should get all entities and return an observable', () => {
      // Given
      const entities = [{id : 11}, { id: 12}];
      const url = 'this is an url';
      service.url = url;
      httpClientStub.get.and.returnValue(of(entities));

      // When
      const result = service.getAll();

      // Then
      expect(httpClientStub.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(of(entities));
    });
  });

  describe('addAll', () => {
    it('should add all entities and return an observable', () => {
      // Given
      const list = [{id : 11}, { id: 12}];
      const url = 'this is an url';
      service.url = url;
      const data = null;
      httpClientStub.post.and.returnValue(of(data));

      // When
      const result = service.addAll(list);

      // Then
      expect(httpClientStub.post).toHaveBeenCalledWith(url + '/all', list);
      expect(result).toEqual(of(data));
    });
  });



});
