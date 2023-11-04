import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import { Platform } from "../Hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errors } = usePlatforms();
  if (errors) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginX={10}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem onClick={() => onSelectPlatform(item)} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
