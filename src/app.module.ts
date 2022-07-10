import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './modules/user/user.module';
import { GroupModule } from './modules/group/group.module';

@Module({
  imports: [BookModule, UserModule, GroupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
