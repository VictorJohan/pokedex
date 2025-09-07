import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonModule,HttpModule]
})
export class SeedModule {}
