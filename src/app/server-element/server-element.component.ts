import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy, 
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // will change the way encapulation works and not apply 
  // the extra attributes
  encapsulation: ViewEncapsulation.Emulated// defualt could also be None, or Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit, 
  OnDestroy {
  // @Input decorator allows for parent components to 
  // communicate and data bind to children components
  // this particular is referenced by [element]
  // the srvElement is an alias 
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  // content stored in a different componenet
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called') //called first
  }

  //only life cycle that takes an input
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called'); //called before OnInit
    // console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called'); //called second
    console.log('text content', this.header.nativeElement.textContent);
    console.log('content of paragrpah', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');  //gets called often-triggered by events or a promise or...
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called'); //gets called last
    console.log('content of paragrpah after content init', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called'); //gets called after each change detection
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called'); //after content has been viewed
    console.log('text content after viewInit', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called'); //after content has been viewed
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
