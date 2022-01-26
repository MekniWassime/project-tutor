import { TestBed } from '@angular/core/testing';

import { SearchPanelService } from './search-panel.service';

describe('SearchPanelService', () => {
  let service: SearchPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
