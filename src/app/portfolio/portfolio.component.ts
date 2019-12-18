import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedPortfolio="all";
  list=[
    "../../assets/images/web1.jpg",
    "../../assets/images/graphic1.jpg",
    "../../assets/images/web1.jpg",
    "../../assets/images/web1.jpg",
    "../../assets/images/web1.jpg",
    "../../assets/images/graphic1.jpg",
    "../../assets/images/web1.jpg",
    "../../assets/images/web1.jpg"];
  constructor() { }

  ngOnInit() {
  }

  onClickAll(){
    this.selectedPortfolio="all";
    this.list=[];
    this.list=[
    "../../assets/images/web1.jpg", 
    "../../assets/images/web2.jpg",
    "../../assets/images/web3.jpg",
    "../../assets/images/graphic1.jpg",
    "../../assets/images/graphic1.jpg",
    "../../assets/images/graphic3.jpg",
    "../../assets/images/banner1.jpg",
    "../../assets/images/banner2.jpg",
    "../../assets/images/banner3.jpg",
    "../../assets/images/design1.jpg",
    "../../assets/images/design2.jpg",
    "../../assets/images/design2.jpg"];
  }
  
  onClickWeb(){
    this.selectedPortfolio="web";
    this.list=[];
    this.list=[
    "../../assets/images/web1.jpg",
    "../../assets/images/web2.jpg",
    "../../assets/images/web3.jpg",
    "../../assets/images/web1.jpg",
    "../../assets/images/web2.jpg",
    "../../assets/images/web3.jpg"];
  }

  onClickdesign(){
    this.selectedPortfolio="design";
    this.list=[];
    this.list=[
    "../../assets/images/design1.jpg",
    "../../assets/images/design2.jpg",
    "../../assets/images/design3.jpg",
    "../../assets/images/design1.jpg",
    "../../assets/images/design2.jpg",
    "../../assets/images/design3.jpg"];
  }

  onClickGraphic(){
    this.selectedPortfolio="graphic";
    this.list=[];
    this.list=[
      "../../assets/images/graphic1.jpg",
      "../../assets/images/graphic1.jpg",
      "../../assets/images/graphic1.jpg",
      "../../assets/images/graphic1.jpg"];
  }

  onClickBanner(){
    this.selectedPortfolio="banner";
    this.list=[];
    this.list=[
      "../../assets/images/banner1.jpg",

      "../../assets/images/banner2.jpg",
      "../../assets/images/banner3.jpg",
      "../../assets/images/banner1.jpg",
      "../../assets/images/banner2.jpg",
      "../../assets/images/banner3.jpg"];
  }
}
