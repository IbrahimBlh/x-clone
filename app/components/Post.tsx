
import Image from "next/image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import "@fontsource/montserrat";
const Post = () => {
  return (
    <div className="border-y-[1px] border-borderGray p-4">
        {/*post type*/}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-[#f0f2f5]">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  <path className="fill-textGray"
    d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
  />
</svg>
        <span>Ibrahim reposted</span>
      </div>
        {/*post content*/}
        <div className="flex flex-col gap-4">
            {/*post avatar*/}
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="/general/avatar.png" alt="avatar" width={100} height={100} />
            </div>
            {/*content*/}
            <div className="flex-1 flex flex-col gap-2">
                {/*top*/}
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="text-base font-bold">Ibrahim Blh</h1>
                        <span className="text-textGray">@IbrahimBlh</span>
                        <span className="text-textGray">1 day ago</span>
                    </div>  
                    <PostInfo/>    
                </div>
                {/*text media*/}
                <div>
                    <p className="text-textGray font-montserrat text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
                    <div className="w-full h-80 relative">
                        <Image src="/general/post.jpeg" alt="post" width={600} height={600}/>
                        <PostInteractions/>
                    </div>
                </div>    

            </div>    
        </div>
    </div>
  );
};
export default Post;