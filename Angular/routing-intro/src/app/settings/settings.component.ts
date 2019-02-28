import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingRoutes= [
    {linkName: 'Profile', url: 'profile'},
    {linkName: 'Privacy Settings', url: 'privacy-settings'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
