import "./App.css";
import CategoryPills from "./component/CategoryPills";
import PageHeader from "./layout/PageHeader";
import { categories, videos } from "./data/home";
import { useState } from "react";
import VideoGridItem from "./component/VideoGridItem";
import Sidebar from "./layout/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategories] = useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="stycky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategories}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => (
              <VideoGridItem {...video} key={video.id} />
            ))}
          </div>
          S
        </div>
      </div>
    </div>
  );
}

export default App;
