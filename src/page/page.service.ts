import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageDTO, PageSectionDto, PageTreeDTO, SubsectionDto } from './pagedto/page.dto';

@Injectable()
export class PageService {
  constructor(private prisma: PrismaService) {}

  // All-Pages
  async allpage() {
    try {
      const res = await this.prisma.page.findMany({
        include: {
          pageSection: {
            include: {
              subsection: true,
            },
          },
        },
      });

      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }


   // find one ----->
async findone(id:any){

  try {
   
   const findUnique = await this.prisma.page.findUnique({
    where:{id:id},
    include:{
      pageSection:{
        include:{
          subsection:true
        }
      }
    }

  
   })
   
   return findUnique
  
  
  } catch (error) {
   return error
  }
  
    }

  // CreatePost ----->

  async createpost(req: PageDTO) {
    // console.log(req);


if(!req.pageSection){

  try {
    const PageName = await this.prisma.page.create({
      data: {
        pageName: req.pageName,
      },
    });
    // console.log(PageName)
    return PageName;
  } catch (error) {
    console.log(error);
  }

}

// const falseSubsection = req.pageSection.map((l,i)=>{return l.subsection})

// console.log(falseSubsection)

// if (falseSubsection ) {
  
//   try {
//     const PageName = await this.prisma.page.create({
//       data: {
//         pageName: req.pageName,
//         pageSection: {
//           create: req.pageSection.map((l, i) => {
//             return {
//               sectionName: l.sectionName ?? '',
//               // subsection: {
//               //   create: {
//               //     key: '',
//               //     value: '',
//               //   },
//               // },
//             };
//           }),
//         } ,
//       },
//     });
//     // console.log(PageName)
//     return PageName;
//   } catch (error) {
//     console.log(error);
//   }

// }

    try {
      const createPage = await this.prisma.page.create({
        data: {
          pageName: req.pageName,
          
          pageSection: {
            create: req.pageSection.map((l, i) => {
              return {
                sectionName: l.sectionName ?? '',
                subsection: {
                  create: l.subsection.map((list, index) => {
                    return { key: list.key ?? '', value: list.value ?? '' };
                  }),
                } ?? {
                  create: {
                    key: '',
                    value: '',
                  },
                },
              };
            }),
          } ,
        },
        include: {
          pageSection: {
            include: {
              subsection: true,
            },
          },
        },
      });

      // const createPage = this.prisma.page.create({
      //   data:{
      //     pageName:req.pageName
      //   }
      // })

      return createPage;
    } catch (error) {
      console.log(error);

      return error;
    }
  }


// cloneSection ------>
async CloneSection(req:PageSectionDto){


  try {

    const CloneSection = await this.prisma.pageSection.create({

      data:{
        pageId:Number(req.pageId),
        sectionName:req.sectionName,
        subsection: {
          create: req.subsection.map((list, index) => {
            return { key: list.key ?? '', value: list.value ?? '' };
          }),
        }
      }
    })   

    return CloneSection

  } catch (error) {
    console.log(error)
  }


}

async CloneSubSection(req:SubsectionDto){


  try {

    const CloneSubSection = await this.prisma.subSection.create({

      data:{
        pageSectionId:Number(req.pageSectionId),
        key:req.key,
        value:req.value
       }
     
    })   

    return CloneSubSection

  } catch (error) {
    console.log(error)
  }


}

  // createpageName ----->
  async createPageName(req: PageDTO) {
    try {
      const PageName = await this.prisma.page.create({
        data: {
          pageName: req.pageName,
        },
      });
      // console.log(PageName)
      return PageName;
    } catch (error) {
      console.log(error);
    }
  }



async CreatePageSection(req:PageSectionDto){

try {
  
const CreateSection = this.prisma.pageSection.create({

data:{
  pageId:Number(req.pageId),
  sectionName: req.sectionName,
  subsection: {
    create: req.subsection.map((list, index) => {
      return { key: list.key ?? '', value: list.value ?? '' };
    }),
  } ?? {
    create: {
      key: '',
      value: ''
    },
  },
},

include:{
  subsection:true
}


})

return CreateSection

} catch (error) {
  console.log(error)
}

}


async CreateSubSection(req:SubsectionDto){

  try {
    
  const CreateSection = this.prisma.subSection.create({
  
  data:{
   pageSectionId:Number(req.pageSectionId),
   key:req.key,
   value:req.value
  }
  
  
  
  })
  
  return CreateSection
  
  } catch (error) {
    console.log(error)
  }
  
  }

  // Updatepage ----->

  async UpdatePage(id: any, req: PageDTO) {
 
try {
 
const UpdatedPage = this.prisma.page.update({

where:{id:id},
data:{
  pageName:req?.pageName,
}

})
return UpdatedPage
} catch (error) {
  console.log(error)
}

    // if(!req.pageSection){

    //   try {
    //     const PageName = await this.prisma.page.update({
    //     where: { id: id },
    //       data: {
    //         pageName: req.pageName,
    //       },
    //     });
    //     // console.log(PageName)
    //     return PageName;
    //   } catch (error) {
    //     console.log(error);
    //   }
    
    // }
  
  
    // try {
    //   const UpadtedPost = this.prisma.page.update({
    //     where: { id: id },
    //     data: {
    //       pageName: req.pageName,
          
    //       pageSection: {
    //         create: req.pageSection.map((l, i) => {
    //           return {
    //             sectionName: l.sectionName ?? '',
    //             subsection: {
    //               create: l.subsection.map((list, index) => {
    //                 return { key: list.key ?? '', value: list.value ?? '' };
    //               }),
    //             } ?? {
    //               create: {
    //                 key: '',
    //                 value: '',
    //               },
    //             },
    //           };
    //         }),
    //       } ,
    //     },
    //     include: {
    //       pageSection: {
    //         include: {
    //           subsection: true,
    //         },
    //       },
    //     },
    //   });

    //   return UpadtedPost;
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async UpdateSection(id: any, req: PageSectionDto) {
 
    try {
     
    const UpdatedPage = this.prisma.pageSection.update({
    
    where:{id:id},
    data:{
      sectionName:req.sectionName,
    }
    
    })

    return UpdatedPage
    } catch (error) {
      console.log(error)
    }
    
    
      }

  async UpdateSubSection(id: any, req: SubsectionDto) {
 
        try {
         
        const UpdatedPage = this.prisma.subSection.update({
        
        where:{id:id},
        data:{
          key:req.key,
          value:req.value
        }
        
        })
        return UpdatedPage
        } catch (error) {
          console.log(error)
        }
       
          }

 async DeletePage(id){

  try {
 
    const deletePost = this.prisma.page.delete({where:{id:id}})
    
    return deletePost
    
    } catch (error) {
     return error
    }

 }   
 
 
 async DeletePageSection(id){

  try {
 
    const deletePost = this.prisma.pageSection.delete({where:{id:id}})
    
    return deletePost
    
    } catch (error) {
     return error
    }

 }  

 async DeleteSubSection(id){

  try {
 
    const deletePost = this.prisma.subSection.delete({where:{id:id}})
    
    return deletePost
    
    } catch (error) {
     return error
    }

 }  


 

 async GetPageTree(){

  try {
    
    const getData = this.prisma.pageTree.findMany({
      include:{
        PageTreeKeyValues:true
      }
    })

    return getData
  } catch (error) {
    console.log(error)
  }
 }

 async GetonePageTree (id:any) {

  try {
   
    const findUnique = await this.prisma.pageTree.findUnique({
     where:{id:id},
     include:{
       PageTreeKeyValues:true
     }
 
   
    })
    
    return findUnique
   
   
   } catch (error) {
    return error
   }


 }


async CreatePageSlug(req:PageTreeDTO){
try {
  
const Slug = await this.prisma.pageTree.create({

  data:{
    slug:req.slug,
    title:req.title
  }



})


return Slug


} catch (error) {
  console.log(error)
}

}


async UpdatePageSlug(id: any, req: PageTreeDTO) {
 
  try {
   
  const UpdatedPage = this.prisma.pageTree.update({
  
  where:{id:id},
  data:{
    slug:req.slug,
    title:req.title,
  }
  
  })
  return UpdatedPage
  } catch (error) {
    console.log(error)
  }
  
  
    }

    async DeletePageSlug(id){

      try {
     
        const deletePost = this.prisma.pageTree.delete({where:{id:id}})
        
        return deletePost
        
        } catch (error) {
         return error
        }
    
     }  

}
