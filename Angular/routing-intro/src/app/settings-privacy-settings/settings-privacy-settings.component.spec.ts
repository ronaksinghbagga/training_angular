import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPrivacySettingsComponent } from './settings-privacy-settings.component';

describe('SettingsPrivacySettingsComponent', () => {
  let component: SettingsPrivacySettingsComponent;
  let fixture: ComponentFixture<SettingsPrivacySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPrivacySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPrivacySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
