import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';


@Injectable()
export class PokemonService {

  @InjectModel(Pokemon.name)
  private readonly pokemonModel: Model<Pokemon>;

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new BadRequestException(error.errmsg)
    }

  }

  findAll() {
    return this.pokemonModel.find();
  }

  async findOne(term: string) {
    let pokemon: Pokemon | null = null;

    //By no.
    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({ no: term })
    }

    //MongoId
    if (isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term);
    }


    //Name
    if (isNaN(+term) && !isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findOne({ name: term.toLowerCase() });
    }


    if (!pokemon) throw new NotFoundException(`Pokemon with id, name or no "${term}" not found`);

    return pokemon;
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {

    updatePokemonDto.name = updatePokemonDto.name?.toLowerCase();
    const pokemonUpdated = await this.pokemonModel.findByIdAndUpdate(id, updatePokemonDto, { new: true });

    return pokemonUpdated;
  }

  async remove(id: string) {
    const pokemon = await this.pokemonModel.findByIdAndDelete(id);
    if (!pokemon) throw new NotFoundException(`Pokemon with id "${id}" not found`);
    return pokemon;
  }
}
