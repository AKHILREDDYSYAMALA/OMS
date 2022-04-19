import { ThisReceiver } from '@angular/compiler';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
 
  constructor(private modalService: NgbModal,private fb: FormBuilder) { }
  orders=[{
    orderNumber : 1 ,
    orderDueDate : '19-04-22' ,
    Customername: 'akhil',
    CustomerAddress: 'hyd',
    CustomerPhone: 123456789,
    OrderTotal: 1000,
     },
    { 
    orderNumber : 2 ,
    orderDueDate : '20-04-22',
    Customername: 'virat',
    CustomerAddress: 'bglr',
    CustomerPhone: 123456789,
    OrderTotal: 1000,
    },
  {
    orderNumber : 3 ,
    orderDueDate : '21-04-22' ,
    Customername: 'kohli',
    CustomerAddress: 'rcb',
    CustomerPhone: 123456789,
    OrderTotal: 1000,
  },
  {
    orderNumber : 4 ,
    orderDueDate : '22-04-22' ,
    Customername: 'sachin',
    CustomerAddress: 'mi',
    CustomerPhone: 123456789,
    OrderTotal: 1000,
  
   },
   
  {
    orderNumber : 5 ,
    orderDueDate : '23-04-22' ,
    Customername: 'dhoni',
    CustomerAddress: 'csk',
    CustomerPhone: 123456789,
    OrderTotal: 1000,
  }];
  closeResult: any;
  cusName: any;
  ordNum:any;
  ordDueDate:any;
  cusAdd:any;
  cusNum:any;
  ordTot:any;
  currentIndex: any;
  myForm:any;
  DeleteClick(index:number){
    let flag = confirm('Are you sure, want to Delete?');
    if(flag==true) {
      this.orders.splice(index,1);
    }}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      orderNumber: [''],
      orderDueDate: [''],
      Customername: [''],
      CustomerAddress: [''],
      CustomerPhone: [''],
      OrderTotal: ['']
    });
  }
  open(content:any,i:any) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.ordNum = this.orders[i].orderNumber;
    this.ordDueDate = this.orders[i].orderDueDate;
    this.cusName = this.orders[i].Customername;
    this.cusAdd = this.orders[i].CustomerAddress;
    this.cusNum = this.orders[i].CustomerPhone;
    this.ordTot = this.orders[i].OrderTotal;
    this.currentIndex = i;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  Submit(modal:any) {
    this.orders[this.currentIndex].orderNumber=this.ordNum;
    this.orders[this.currentIndex].orderDueDate=this.ordDueDate;
    this.orders[this.currentIndex].Customername=this.cusName;
    this.orders[this.currentIndex].CustomerAddress=this.cusAdd;
    this.orders[this.currentIndex].CustomerPhone=this.cusNum;
    this.orders[this.currentIndex].OrderTotal=this.ordTot;
    
    modal.close()
    
  }
  start(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  onSubmit(form: FormGroup,modal:any) {
    
    this.orders.push(form.value);
    modal.close()
   
  }

}
