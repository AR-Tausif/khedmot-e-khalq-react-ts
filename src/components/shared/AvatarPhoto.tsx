import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarPhoto = ({ img, text }) => {
  return (
    <Avatar>
      <AvatarImage src={img} />
      <AvatarFallback>{text}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarPhoto;
