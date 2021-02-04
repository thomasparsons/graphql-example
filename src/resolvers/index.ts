import pets from "./pets.json";

enum PetType {
  CAT = "cat",
  DOG = "dog",
}

interface Pet {
  age: number;
  name: string;
  node_id: string;
  type: PetType;
}

interface Context {
  catYears: number;
  dogYears: number;
}

const resolvers = {
  Query: {
    getDogs: () => {
      return pets.filter((pet) => pet.type === PetType.DOG);
    },
    getCats: () => {
      return pets.filter((pet) => pet.type === PetType.CAT);
    },
  },
  PetInfo: {
    age: (parent: Pet, args: { humanYears: boolean }, context: Context) => {
      if (args.humanYears) {
        if (parent.type === PetType.CAT) {
          return parent.age * context.catYears;
        }
        return parent.age * context.dogYears;
      }
      return parent.age;
    },

    name: ({ name }: Pet) => name,

    node_id: (parent: Pet) => {
      return parent.node_id;
    },
  },
};

export default resolvers;
