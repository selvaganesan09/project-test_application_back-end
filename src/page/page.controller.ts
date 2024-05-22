import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PageService } from './page.service';
import { PageDTO, PageSectionDto, PageTreeDTO, SubsectionDto } from './pagedto/page.dto';

@Controller('page')
export class PageController {



 constructor (private Pageservice:PageService){}


@Post('pagetreeslug')
CreatePageSlug(@Body() req:PageTreeDTO ){
 return this.Pageservice.CreatePageSlug(req)
}





@Get('pagecontent')
GetPageTree(){
 return this.Pageservice.GetPageTree()
}

@Get('pagecontent/:id')
GetonePageTree(@Param('id') id:string){
 return this.Pageservice.GetonePageTree(Number(+id))
}



@Get("allpage")
allpage(){
 return this.Pageservice.allpage()
}


@Get(':id')
findone(@Param('id') id:string){
return this.Pageservice.findone(Number(+id))
}


@Post('createpage')
creatpage(@Body() req:PageDTO ){
 return this.Pageservice.createpost(req)
}


@Post('createpagename')
createPageName(@Body() req:PageDTO){
return this.Pageservice.createPageName(req)
}

@Post('createpagesection')
CreatePageSection(@Body() req:PageSectionDto ){
 return this.Pageservice.CreatePageSection(req)

}

@Post('createsubsection')
CreateSubSection(@Body() req:SubsectionDto ){
 return this.Pageservice.CreateSubSection(req)
}

@Post('clonesection')
CreateCloneSection(@Body() req:PageSectionDto ){
 return this.Pageservice.CloneSection(req)
}

@Post('clonesubsection')
CreateCloneSubSection(@Body() req:SubsectionDto ){
 return this.Pageservice.CloneSubSection(req)
}

@Put(':id')
UpdatePage(@Param('id') id:string,@Body()updateValue:PageDTO){
 return this.Pageservice.UpdatePage(Number(id),updateValue)
}

@Put('pagetreeslug/:id')
UpdatePageSlug(@Param('id') id:string,@Body()updateValue:PageTreeDTO){
 return this.Pageservice.UpdatePageSlug(Number(id),updateValue)
}

@Put('section/:id')
UpdateSection(@Param('id') id:string,@Body()updateValue:PageSectionDto){
 return this.Pageservice.UpdateSection(Number(id),updateValue)
}

@Put('subsection/:id')
UpdateSubSection(@Param('id') id:string,@Body()updateValue:SubsectionDto){
 return this.Pageservice.UpdateSubSection(Number(id),updateValue)
}


@Delete("pagetreeslug/:id")
DeletePage(@Param('id') id:string){
 return this.Pageservice.DeletePageSlug(Number(id))
}

@Delete(":id")
DeletePageSlug(@Param('id') id:string){
 return this.Pageservice.DeletePage(Number(id))
}

@Delete("section/:id")
DeletePageSection(@Param('id') id:string){
 return this.Pageservice.DeletePageSection(Number(id))
}

@Delete("subsection/:id")
DeleteSubSection(@Param('id') id:string){
 return this.Pageservice.DeleteSubSection(Number(id))

}

}
