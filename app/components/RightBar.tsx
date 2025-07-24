import Search from "./Search";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";

const RightBar = () => {
  return (
    <div>
     <Search />
      <PopularTags />
      <Recommendations />
      <div>
        
        <span>€ 2025 I Corp.</span>
      </div>
    </div>
  );
};
export default RightBar;