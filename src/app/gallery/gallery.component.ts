import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { data, Images } from './data';
import { Service } from '../services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public title = 'Gallery';
  public images: Images[] = data;
  public selctedImage: Images;
  
  @ViewChild('plate')
  public plate: ElementRef;

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service.selectedImage.subscribe(selctedImage => this.selctedImage = selctedImage);
  }

  selecting(item: Images): void {
    this.selctedImage = item;
  }

}
