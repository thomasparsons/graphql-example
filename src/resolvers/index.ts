import pets from "./pets.json";

const resolvers = {
  Query: {
    getDogs: () => {
      return pets.dogs;
    },
  },
  Dogs: {
    dogs: (parent: any) => {
      return parent;
    },
  },
  PetInfo: {
    age: (parent: any, { doubled }: { doubled: boolean }) => {
      if (doubled) {
        return parent.age * 2;
      }
      return parent.age;
    },
    name: (parent: any) => {
      return parent.name;
    },
  },
};

export default resolvers;
