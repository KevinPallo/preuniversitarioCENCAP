import { Component, OnInit, Input } from '@angular/core';
import { ICarouselItem } from './Icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() height = 500
  @Input() items: ICarouselItem[]=[]

  public currentPosition=0

  constructor() { 

  }

  ngOnInit(): void {   
    this.items.map((i, index) =>{
      i.id = index
      i.marginLeft = 0
    }) 
  } 

  setCurrentPosition(position:number){
    console.log("current position: ", position, " img: ", this.currentPosition)
    this.currentPosition = position
    this.items.find(i => {
      if(i.id === 0){
        i.marginLeft = -100 * this.currentPosition 
      }
    })
  }

  setNext(){
    let finalPercentage = 0
    let nextPosition = this.currentPosition + 1
    if(nextPosition <= this.items.length - 1){
      finalPercentage = -100* nextPosition
    }
    else{
      nextPosition=0
    }
    this.items.find(i => {
      if(i.id === 0){
        i.marginLeft = finalPercentage 
      }
    })
    this.currentPosition = nextPosition
  }

  setBack(){
    let finalPercentage = 0
    let backPosition = this.currentPosition - 1
    if(backPosition >= 0){
      finalPercentage = -100 *backPosition
    }
    else{
      backPosition = this.items.length -1
      finalPercentage = -100 * backPosition
    }
    this.items.find(i => {
      if(i.id === 0){
        i.marginLeft =finalPercentage
      }
    }) 
    this.currentPosition = backPosition
  }

}
