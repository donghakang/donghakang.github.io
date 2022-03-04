import SkillSphere from "../object";
import * as Styled from "./style";
// import SkillScene from "./SkillScene";
import skills from '../../../data/skillData.json'

const SkillLayer = () => {
  return (
    <div css={Styled.skillStyle}>
      <div css={Styled.titleContainerStyle}>
        <h2 css={Styled.titleStyle}>My Superpower.</h2>
      </div>
      <div css={Styled.skillContainerStyle}>
        <SkillSphere skills={skills}/>
      </div>
    </div>
  );
};

export default SkillLayer;
