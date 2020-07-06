import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  
displayList=[]

  constructor() { }
  ngOnInit(): void {
  }
images="assets/avataaars.png"
  remove(){   //this method is to remove image
   
      this.displayList.pop();
         }
  
  
  update(e,j){ //this method is to update image
            
      for(let i=0;i<=this.displayList.length;i++){
        if(i==j){
          var reader= new FileReader();
       reader.readAsDataURL(e.target.files[0]);
      console.log(e.target.files[0])
      reader.onload=(event:any)=>{
      let temp=event.target.result      
        this.displayList[i]=temp;
        console.log("Updated")
        }

      }

    }
  }

  addFile(e){  //this method is to add File
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      console.log(e.target.files[0])
      reader.onload=(event:any)=>{
        let temp=event.target.result;
        this.displayList.push(temp);
      }
    }
  }
}
