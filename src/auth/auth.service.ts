import { Injectable,  } from "@nestjs/common";
import {User,Bookmark} from '@prisma/client'
import { userInfo } from "os";
import { title } from "process";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class AuthService{
 constructor(private prisma:PrismaService){

 }
 signup(){
  return {massage:'i am signed up'}
 }
 signin(){
  return {msg:'i am sign in'}


 }


 getusers (){

  const User =  this.prisma.user.findMany()

  console.log(User)
  
  return User
  
   }



}