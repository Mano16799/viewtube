import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { startDateValidator, endDateValidator } from '../customValidators';
export interface Tag {
  name: string;
}

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
}) 
export class StudioLivestreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  curDate = new Date();

  liveStreamForm = new FormGroup({
    eventTitle: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    startDate: new FormControl('', [Validators.required, startDateValidator()]),
    endDate: new FormControl('', [Validators.required, endDateValidator()]),
    eventDetails: new FormControl(''),
    guestList: new FormControl('',)
  });
  get eventTitle() { return this.liveStreamForm.controls['eventTitle']; }
  get startDate() {return this.liveStreamForm.controls['startDate'];}
  get endDate() {return this.liveStreamForm.controls['endDate'];}
  get eventDetails() { return this.liveStreamForm.controls['eventDetails']; }
  get guestList() { return this.liveStreamForm.controls['guestList']; }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our tag
    if (value) {
      this.tags.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  register(): void {
    console.log(this.liveStreamForm);
  }
}
