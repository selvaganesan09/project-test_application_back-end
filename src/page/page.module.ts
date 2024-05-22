import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PageController } from "./page.controller";
import { PageService } from "./page.service";


@Module({
 imports:[PrismaModule],
 controllers: [PageController],
 providers: [PageService]
})
export class PageModule {}
