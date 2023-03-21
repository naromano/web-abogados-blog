import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = "https://us-central1-blog-agneni-carrazco.cloudfunctions.net/app/";
   url1 = "http://localhost:3000/api/"

  constructor(private http: HttpClient) { }

  

  createPost(post: PostModel){
    const token = localStorage.getItem('auth_token')
    if(token){
    return this.http.post<PostModel>(`${this.url}api/posts/addpost`, post ,{ headers: {auth_token: token} } )
    }
    return null

  }

  allPosts(){
    
      return this.http.get(`${this.url}api/posts/allposts`);
  }

  onePost(id: string){

    return this.http.get<PostModel>(`${this.url}api/posts/post/${id}`);

    

  }

  updatePost(id: string, post: PostModel){
    const token = localStorage.getItem('auth_token')
    if(token){
    return this.http.put<PostModel>(`${this.url}api/posts/post/${id}`, post ,{ headers: {auth_token: token} } )
    }
    return null

  }

  deletePost(id:string){
    const token = localStorage.getItem('auth_token')
    if(token){
    return this.http.delete(`${this.url}api/posts/post/${id}`,{ headers: {auth_token: token} })
    }
    return null

  }

  
}
