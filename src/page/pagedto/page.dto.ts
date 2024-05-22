// export class PageDTO {
// pageName:string
// pageSection:[{
//  sectionName:string
//  subsection:[{
// key:string
// value:string
//  }]


// }]

// }


import { IsNumber, IsString } from 'class-validator';
import {  ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


// subsection.dto.ts

export class SubsectionDto {
  @IsString()
  key?: string;
  @IsNumber()
  pageSectionId?:Number;
  @IsString()
  value?: string;
}

// page-section.dto.ts
export class PageSectionDto {
  @IsString()
  sectionName?: string;  
  @IsNumber()
  pageId?:Number;
  @ValidateNested({ each: true })
  @Type(() => SubsectionDto)
  subsection?: SubsectionDto[];
}


export class PageDTO {
 @IsString()
 pageName: string;
 @ValidateNested({ each: true })
 @Type(() => PageSectionDto)
 pageSection?: PageSectionDto[];
}




 export class PageTreeKeyValues{

  @IsString()
  key?: string;
  @IsNumber()
  pageTreeId?:Number;
  @IsString()
  value?: JSON;

 }



 export class PageTreeDTO {
 
  @IsString()
  slug: string;
  title: string;

  @ValidateNested({ each: true })
  @Type(() => PageTreeKeyValues)
  PageTreeKeyValues?: PageTreeKeyValues[];
 }
