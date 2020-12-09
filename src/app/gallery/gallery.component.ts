import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public title = 'Gallery';
  public images: [] = data;

  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

}
