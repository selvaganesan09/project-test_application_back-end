import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";

@Controller('auth')
export class AuthController{
 
 constructor(private authservice:AuthService){}

 @Post('signup')
 signup(@Body() dto: any){
  console.log({dto,})
  return this.authservice.signup() 
 }

 @Post('signin')
 signin(){
  return this.authservice.signin()
 }

 @Get('allusers')
 getusers(){
  return this.authservice.getusers()
 }

}

