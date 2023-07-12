import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {
  posts: any
 
  constructor(private service:PostService){}
  
ngOnInit() {
  this.service.getPosts()
  .subscribe(response =>{
    this.posts=response
    console.log(response)
  },error =>{
    alert('unexpected error');
    console.log(error); 
  })}



  createPost(input:HTMLInputElement){
    let post ={id:input.value}
  input.value='';
  
  this.service.createPost(post)
  .subscribe(response =>{
    // post['id'] = response
    // console.log(response)
    this.posts.splice(0,0,response)
  },error =>{
    alert('unexpected error');
    console.log(error); 
  })}


  updatePost(post:any){
    this.service.updatePost(post)
   .subscribe(response =>{
    console.log(response)
   },error =>{
    alert('unexpected error');
    console.log(error); 
  }) }

  deletePost(post:any){
    this.service.deletePost(post.id)
    .subscribe(response =>{
      
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1); 
    })}

}
