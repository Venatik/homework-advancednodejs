import { Module } from '@nestjs/common';
import { UserprofilesService } from './userprofiles.service';
import { UserprofilesController } from './userprofiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userprofile } from './entities/userprofile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Userprofile])],
  controllers: [UserprofilesController],
  providers: [UserprofilesService],
})
export class UserprofilesModule {}
