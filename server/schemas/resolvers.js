const { Book, User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate("savedBooks");
    },
    login: async () => {
      return await User.findOne();
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    saveBook: async (parent) => {},
    deleteBook: async (parent, args) => {},
  },
};

module.exports = resolvers;
