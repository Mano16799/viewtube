import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl } from '@angular/forms';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})


export class VideoUploadComponent implements OnInit {
  formData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.formData);
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags:Tag[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push({name: value});
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

  disableSelect = new FormControl(false);
}
