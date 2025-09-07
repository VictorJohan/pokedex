import { Controller, Get, Inject } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {

    @Inject(SeedService)
    private readonly seedService: SeedService;

    @Get('populate')
    async populate() {
        return await this.seedService.populate();
    }

}
