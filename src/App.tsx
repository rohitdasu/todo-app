import React, { useContext } from "react";
import { useGetBackground } from "@/hooks/index";
import Todo from "@/components/Todo";
import { Context } from "@/context/index";

function App() {
  const { theme } = useContext(Context);
  const [viewportWidth, setViewportWidth] = React.useState<number>(0);
  const background = useGetBackground(viewportWidth, theme);

  React.useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    setViewportWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className={`min-h-screen flex flex-col relative`}>
      <div>
        <img
          src={background?.image || ""}
          alt="background"
          height={background?.size?.height || 0}
          width={background?.size?.width || 0}
          className="w-full"
        />
      </div>
      <div className="absolute left-0 top-5 md:top-20 w-full">
        <Todo />
      </div>
      <div className="bg-[#fbfafb] dark:bg-[#181824] flex-1" />
    </main>
  );
}

export default App;
