import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails=[
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"pan-fried masala paneer",
      foodPrice:200,
      foodImg:"https://tse2.mm.bing.net/th?id=OIP.ug_sPZv-GN5PfdFLrxur1gHaD4&pid=Api&P=0",
    },

    {
      id:2,
      foodName:"Pizza",
      foodDetails:"pan-fried masala paneer",
      foodPrice:250,
      foodImg:"https://tse1.mm.bing.net/th?id=OIP.8Y8_J3LH_lIAD_L-QJ6ZKgHaEK&pid=Api&P=0",
    },

    {
      id:3,
      foodName:"pastry",
      foodDetails:"chocochip pastry",
      foodPrice:100,
      foodImg:"https://tse2.mm.bing.net/th?id=OIP.PKILJYjfLUqCvJYsUveAUgHaEx&pid=Api&P=0",
    },

    {
      id:4,
      foodName:"egg roll",
      foodDetails:"Double egg roll loaded with veg",
      foodPrice:100,
      foodImg:"https://tse1.mm.bing.net/th?id=OIP._Nb6gwdtqHf8ShrBl6SiXgHaHa&pid=Api&P=0",
    },

    {
      id:5,
      foodName:"Ice Cream",
      foodDetails:"choclate with vanilla & pineapple",
      foodPrice:200,
      foodImg:"https://tse4.mm.bing.net/th?id=OIP.RCk3doU__Wxr_lvycqGthQHaD4&pid=Api&P=0",
    },

    {
      id:4,
      foodName:"Egg Biriyanyi",
      foodDetails:"Handi biryani with the taste of moms hand",
      foodPrice:300,
      foodImg:"https://tse4.mm.bing.net/th?id=OIP.6EFZh0ldA3x4JCEM8TwLgwHaHa&pid=Api&P=0",
    },

    {
      id:4,
      foodName:"cake",
      foodDetails:"As per coustmers demand",
      foodPrice:600,
      foodImg:"https://tse2.mm.bing.net/th?id=OIP._RmXcbSzY4LagJnw31_TkAHaHa&pid=Api&P=0",
    },

    {
      id:4,
      foodName:"Puri chole",
      foodDetails:"puri chole with punjabi tardka",
      foodPrice:200,
      foodImg:"https://tse3.mm.bing.net/th?id=OIP.4ZJkJS0fiwPmqpp2i38n2gEsDI&pid=Api&P=0",
    },
  ]
}
