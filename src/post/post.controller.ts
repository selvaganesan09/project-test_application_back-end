import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req } from "@nestjs/common";
import { PostService } from "./post.service";
import { Request } from "express";
import { CreatePostDto } from "./dto/post.dto";

@Controller('post')

export class PostController{
 
 constructor(private Postservice:PostService){}

 // @Post('signup')
 // signup(@Body() dto: any){
 //  console.log({dto,})
 //  return this.Postservice.signup() 
 // }

 // @Post('signin')
 // signin(){
 //  return this.Postservice.signin()
 // }

@Get('allposts')

allposts(){
 
 return this.Postservice.allposts()

}


@Post('createpost')
createpost(@Body() req: CreatePostDto){


// console.log(req.body)

 return this.Postservice.createpost(req)
 
}


@Get(':id')
findone(@Param('id') id:string){
return this.Postservice.findone(Number(+id))
}

@Put(':id')
updatepost(@Param('id')  id: string,@Body()updateVAlue:CreatePostDto){

 console.log(id,updateVAlue, typeof id)
 return this.Postservice.updatepost(Number(id),updateVAlue)
}


@Delete(':id')
deletepost(@Param('id') id:string){
return this.Postservice.deletepost(+id)
}
}

