import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(0, "To each man his own", "Unknown", "Fidelis", 0, 0, new Date(2018, 6, 7)),
  ];

  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  upvoteQuote(index: number) {
    this.quotes[index].upvotes += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
