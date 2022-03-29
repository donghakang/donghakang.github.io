import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { HeadphoneParallax } from ".";
import theme from "../../../assets/theme/theme";
import KeyboardParallax from "./KeyboardParallax";
import MacbookParallax from "./MacbookParallax";
interface MeshGroupInterface {
  y: number;
}

interface MeshInterface {
  rotation: number[];
  color: string;
  zoom: number;
  left?: string;
  right?: string;
  top: string;
}

const KeyboardMesh: React.FC<MeshInterface> = ({
  rotation,
  color,
  zoom,
  left,
  right,
  top,
}) => {
  return (
    <motion.div
      css={css`
        position: absolute;
        left: ${left};
        top: ${top};
        right: ${right};
      `}
    >
      <KeyboardParallax
        style={{ width: "500px", height: "500px" }}
        rotation={rotation}
        color={color}
        zoom={zoom}
      />
    </motion.div>
  );
};

const HeadphoneMesh: React.FC<MeshInterface> = ({
  rotation,
  color,
  zoom,
  left,
  right,
  top,
}) => {
  return (
    <motion.div
      css={css`
        position: absolute;
        left: ${left};
        top: ${top};
        right: ${right};
      `}
    >
      <HeadphoneParallax
        style={{ width: "500px", height: "500px" }}
        rotation={rotation}
        color={color}
        zoom={zoom}
      />
    </motion.div>
  );
};

const MacbookMesh: React.FC<MeshInterface> = ({
  rotation,
  color,
  zoom,
  right,
  left,
  top,
}) => {
  return (
    <motion.div
      css={css`
        position: absolute;
        left: ${left};
        right: ${right};
        top: ${top};
      `}
    >
      <MacbookParallax
        style={{ width: "500px", height: "500px" }}
        rotation={rotation}
        color={color}
        zoom={zoom}
      />
    </motion.div>
  );
};

const MeshGroup: React.FC<MeshGroupInterface> = ({ y }) => {
  return (
    <div
      css={css`
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      <MacbookMesh
        rotation={[
          131 / (100 * Math.PI),
          y / (100 * Math.PI),
          131 / (100 * Math.PI),
        ]}
        color={theme.colors.blue_1}
        zoom={70}
        left={"20vw"}
        top={"0"}
      />
      <HeadphoneMesh
        rotation={[
          150 / (100 * Math.PI),
          -y / (100 * Math.PI),
          50 / (100 * Math.PI),
        ]}
        color={theme.colors.main_orange}
        zoom={70}
        right={"0"}
        top={"15%"}
      />
      <KeyboardMesh
        rotation={[
          131 / (100 * Math.PI),
          y / (100 * Math.PI),
          131 / (100 * Math.PI),
        ]}
        color={theme.colors.alternate_blue_3}
        zoom={60}
        left={"0"}
        top={"30%"}
      />
      <MacbookMesh
        rotation={[
          131 / (100 * Math.PI),
          y / (100 * Math.PI),
          131 / (100 * Math.PI),
        ]}
        color={theme.colors.main_orange}
        zoom={70}
        left={"20vw"}
        top={"45%"}
      />
      <HeadphoneMesh
        rotation={[
          131 / (100 * Math.PI),
          y / (100 * Math.PI),
          131 / (100 * Math.PI),
        ]}
        color={theme.colors.alternate_blue_3}
        zoom={70}
        right={'0'}
        top={"60%"}
      />
      <KeyboardMesh
        rotation={[
          131 / (100 * Math.PI),
          y / (100 * Math.PI),
          131 / (100 * Math.PI),
        ]}
        color={theme.colors.main_orange}
        zoom={70}
        left={"0"}
        top={"70%"}
      />
    </div>
  );
};

export default MeshGroup;
