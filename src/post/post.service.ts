import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/post.dto';

@Injectable({})
export class PostService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { massage: 'i am signed up' };
  }

  signin() {
    return { msg: 'i am sign in' };
  }

  // get all post ----->
  allposts() {
    try {
      const allPosts = this.prisma.post.findMany();

     
      return allPosts;

    } 
    
    catch (error) {

      console.log(error);

    }
  }


  // find one ----->
findone(id:any){

try {
 
 const findUnique = this.prisma.post.findUnique({
  where:{id:id}

 })
 
 return findUnique


} catch (error) {
 return error
}

  }
  // create Post --->

async createpost(req : CreatePostDto) {




  try {


    const PostExists = await this.prisma.post.findUnique({
      where:{slug:req.slug},
    })

    console.log(PostExists)

//  const IfPostExists =( await req.slug ) === (PostExists.slug )

// console.log(IfPostExists)



if (!PostExists) {
  const createPost =await this.prisma.post.create({
    data: {
      author: req.author,
      aboutImage: req.  aboutImage,
      authorDescription: req.authorDescription,
      featuredImage: req.featuredImage,
      title: req.title,
      description: req.description,
      category: req.category,
      tags: req.tags,
      keywords: req.keywords,
      readingTime:req.readingTime,
      authorImage:req.authorImage,
      content:req.content,
      slug:req.slug,
    },


  });
  console.log(createPost);

  return createPost;

} else {
  
  return {message:'Post URL is Already Exits'}
}
    } 

  catch (error) {
      console.log(error);
      return error
    }

  }

  // Update post

  updatepost(id:any,req: CreatePostDto) {

    // const test = 2

    // console.log(typeof test)

    try {

      const UpdatePost = this.prisma.post.update({
       
        where: { id: id },
        
        data: {
          author: req?.author,
          aboutImage: req?.  aboutImage,
          authorDescription: req?.authorDescription,
          featuredImage: req?.featuredImage,
          title: req?.title,
          description: req?.description,
          category: req?.category,
          tags: req?.tags,
          keywords: req?.keywords,
          readingTime:req?.readingTime,
          authorImage:req?.authorImage,
          content:req?.content,
          slug:req?.slug,
        },

      });

      console.log(UpdatePost);

      return UpdatePost;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // delete post
  deletepost(id) {

try {
 
const deletePost = this.prisma.post.delete({where:{id:id}})

return deletePost

} catch (error) {
 return error
}

  }

  //  delete multiple post
  deletemanypost() {}
}
