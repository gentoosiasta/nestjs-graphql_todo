import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Esto retorna Hola Mundo',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomNumberFromZeroTo',
    description: 'From zero to argument TO',
  })
  getRandomNumberFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to = 6,
  ): number {
    // return Math.floor(Math.random() * (max - min + 1) + min);
    return Math.floor(Math.random() * (to + 1));
  }
}
