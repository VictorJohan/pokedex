import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { PokemonListResponse } from 'src/common/interfaces/pokemonListResponse.interface';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SeedService {

  @Inject(PokemonService)
  private readonly pokemonService: PokemonService;

  @Inject(HttpService)
  private readonly httpService: HttpService;

  async populate() {
    const response = await firstValueFrom(
      this.httpService.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=500')
    );
    const data = response.data;
    const pokemons: CreatePokemonDto[] = data.results.map(pokemon => {
      const noString = pokemon.url.split('/').at(-2);
      return {
        name: pokemon.name,
        no: noString ? Number(noString) : 0
      };
    });

    await this.pokemonService.createMany(pokemons);

    return this.pokemonService.findAll();
  }
}
