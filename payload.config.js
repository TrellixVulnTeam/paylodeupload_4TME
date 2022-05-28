import { buildConfig } from "payload/config";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Admins from "./collections/Admins";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug
  },
  collections: [Categories, Posts, Tags, Users, Admins]
});
