import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// modulesのパス
import { LoginUserController } from './login-user.controller';
import { LoginUserService } from './login-user.service';

// Providersのパス
import { LoginUser } from '@/providers/domain-model/entity/LoginUser';
import { Role } from '@/providers/domain-model/entity/Role';
import { LoginUserRole } from '@/providers/domain-model/entity/LoginUserRole';

import { LoginUserRepository } from '@/providers/infrastructure/repository/login-user.repository';
import { ShareProviderModule } from '@/providers/share.provider.module';
import { ConstantTokens } from '@/providers/domain-model/constant/ConstantTokens';

@Module({
  imports: [ShareProviderModule, TypeOrmModule.forFeature([LoginUser, Role, LoginUserRole])],
  controllers: [LoginUserController],
  providers: [
    {
      provide: ConstantTokens.ILoginUserService,
      useClass: LoginUserService,
    },
    {
      provide: ConstantTokens.ILoginUserRepository,
      useClass: LoginUserRepository,
    },
  ],
})
export class LoginUserModule {}
