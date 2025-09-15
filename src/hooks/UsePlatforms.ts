import { image } from "framer-motion/client";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const UsePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default UsePlatforms;
