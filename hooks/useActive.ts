import { useState } from "react";

interface UseActive {
  active: boolean;
  handleActive: () => void;
}

const useActive = (): UseActive => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return { active, handleActive };
};

export default useActive;
