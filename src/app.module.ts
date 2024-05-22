import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { PageModule } from './page/page.module';


@Module({
  imports: [AuthModule, UserModule,BookmarkModule, PrismaModule,PostModule, PageModule ],
  
})
export class AppModule {}
