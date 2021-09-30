import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  public arrWords: string[] = ['angular','html','java'];
  public placeholder: string = 'Word here..';
  public areaPlaceholder = 'Text here...';
  public borderStyle!: string;
  public areaBorderStyle!: string;
  public word!: string;
  public area!: string;

  constructor() { }

  ngOnInit(): void {
  }
  public reset() {
    this.word = '';
    this.placeholder = 'word here...';
    this.borderStyle = ''
  }

  public addWords(): void {
    if (this.word) {
      if (this.arrWords.length == 0) {
        this.arrWords.push(this.word);
        this.reset();
      } else if (this.arrWords.length != 0) {
        if (this.arrWords.includes(this.word)) {
          this.word = '';
          this.placeholder = 'Write other word!';
          this.borderStyle = '1px solid red'
        } else {
          this.arrWords.push(this.word);
          this.reset();
        }
      }
    } else {
      this.placeholder = 'Write any word!';
      this.borderStyle = '1px solid red'
    }
  }

  public deleteWords(): void {
    this.arrWords.splice(0, this.arrWords.length);
  }

  public cenzor() {
    if (this.area) {
      this.areaPlaceholder = 'text here...';
      this.areaBorderStyle = ''
      this.arrWords.forEach((word) => {
        for (; this.area.includes(word);) {
          let stars: string = this.generateStars(word.length);
          let index: number = this.area.indexOf(word);
          let arr: string[] = this.area.split('');
          arr.splice(index, word.length, stars);
          this.area = arr.join('');
        }
      })
    } else {
      this.areaPlaceholder = 'Write some text!';
      this.areaBorderStyle = '1px solid red'
    }
  }

  private generateStars(length: number) {
    let starString = '';
    for (let i = 0; i < length; i++) {
      starString += '*';
    }
    return starString
  }
}
