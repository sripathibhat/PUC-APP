import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  showForm: boolean = false;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.showForm = true;
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "https://form.jotform.com/202214120602433";
    // this.elementRef.nativeElement.appendChild(s);
    // window.open("https://form.jotform.com/jsform/202214120602433", "_self");
  }

  // ngAfterViewInit() {
  //   var s = document.createElement("script");
  //   s.type = "text/javascript";
  //   s.src = "https://form.jotform.com/jsform/202214120602433";
  //   this.elementRef.nativeElement.appendChild(s);
  // }

}
