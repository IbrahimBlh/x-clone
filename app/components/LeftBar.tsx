import Image from "next/image";
import Link from "next/link";

const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8 2xl:pt-8 2xl:pb-0">
      {/* Logo menu button */}
      <div className="flex flex-col gap-4 text-lg items-center 2xl:items-start">
        {/* Logo */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818] cursor-pointer">
        <Image src="icons/logo.svg" alt="logo" width={24} height={24}/>
        </Link>
        {/* Menu */}
        <div className="flex flex-col gap-4">
          {menuList.map((menu) => (
            <Link href={menu.link} key={menu.id}>
              <div className="flex items-center p-2 rounded-full hover:bg-[#181818] cursor-pointer gap-4">
                <Image src={`icons/${menu.icon}`} alt={menu.name} width={24} height={24}/>
                <span className="hidden 2xl:inline">{menu.name}</span>
              </div>
            </Link>
          ))}
       </div>
        </div>
        {/* Create post button */}
        <div >
          <Link href="/" className="2xl:hidden bg-white text-black font-bold rounded-full w-12 h-12 flex items-center justify-center">
              <Image src="/icons/post.svg" alt="plus" width={24} height={24}/>
          </Link>
          <Link href="/" className="hidden 2xl:block bg-white text-black font-bold rounded-full py-2 px-20">
          post
          </Link>
        </div>
        {/* User profile */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src="/general/avatar.png" alt="user" fill/>
                </div>
                <div className="hidden 2xl:flex flex-col">
                    <span className="font-bold">Ibrahim Blh</span>
                    <span className="text-sm text-textGray">@IbrahimBlh</span>
                </div>

            </div>
            <div className="hidden 2xl:block cursor-pointer font-bold">

            </div>
        </div>
        
    </div>
  );
};
export default LeftBar;