import { FC } from "react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji: FC<EmojiProps> = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "", boxSize: "25px" },
    4: { src: thumbsUp, alt: "", boxSize: "25px" },
    5: { src: bullsEye, alt: "", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
