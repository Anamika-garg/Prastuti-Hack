import { Layout } from "../../components/Layout";
import { BellIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

// Food item data for expiration alerts
const expirationItems = [
  { id: 1, name: "Milk", days: 4, image: "public/image-2.png" },
  { id: 2, name: "Bread", days: 2, image: "public/image-3.png" },
  { id: 3, name: "Vegetables", days: 5, image: "public/image-5.png" },
  { id: 4, name: "Eggs", days: 7, image: "public/image-4.png" },
  { id: 5, name: "Ketchup", days: 4, image: "public/image-6.png" },
  { id: 6, name: "Butter", days: 3, image: "public/image-7.png" },
  { id: 7, name: "Curd", days: 1, image: "public/image.png" },
  { id: 8, name: "Soyabeen Chunks", days: 30, image: "public/image-1.png" },
];

// Food items for "Use It Today" section
const useItTodayItems = [
  { id: 1, image: "public/image-8.png" },
  { id: 2, image: "public/image-9.png" },
  { id: 3, image: "public/image-10.png" },
  { id: 4, image: "public/image-11.png" },
  { id: 5, image: "public/image-12.png" },
];

export const Expiration = (): JSX.Element => {
  return (
    <Layout>
      {/* Use It Today Section */}
      <div className="px-4 mt-4">
        <h2 className="[font-family:'Oxanium',Helvetica] font-normal text-white text-[22px] [text-shadow:0px_4px_4px_#00000040] mb-4">
          Use It Today
        </h2>

        <ScrollArea className="w-full h-[100px] overflow-hidden">
          <div className="flex space-x-4 p-1">
            {useItTodayItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[100px] h-[100px] bg-[#1e1e1e] rounded-[50px] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="Food item"
                  className="w-[90px] h-[86px] object-cover m-auto mt-1.5"
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Upcoming Expiration Alerts */}
      <div className="px-4 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="[font-family:'Roboto',Helvetica] font-bold text-white text-xl whitespace-nowrap">
            Upcoming Expiration Alerts
          </h2>
          <Button
            variant="link"
            className="[font-family:'Oxanium',Helvetica] text-white text-[15px] p-0"
          >
            See All
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {expirationItems.map((item) => (
            <Card
              key={item.id}
              className="bg-transparent border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[190px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-1">
                    <p className="[font-family:'Alkatra',Helvetica] font-normal text-[#fefbfa] text-xs">
                      {item.name} expiring in {item.days}{" "}
                      {item.days === 1 ? "day" : "days"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Alert Bar */}
      <div className="fixed bottom-20 left-0 right-0 mx-auto w-[383px] h-[57px] bg-white rounded-[30px] flex items-center px-4">
        <div className="flex items-center">
          <div className="relative mr-4">
            <div className="w-[3px] h-[29px] bg-black absolute"></div>
            <div className="w-[25px] h-[1px] bg-black absolute top-1/2 -translate-y-1/2"></div>
          </div>
          <p className="[font-family:'Kay_Pho_Du',Helvetica] font-medium text-black text-sm">
            Alert! Bread is expiring Today
          </p>
        </div>

        <div className="ml-auto flex items-center space-x-2">
          <div className="w-3 h-[27px] bg-[#6cd3ff] rounded-[50px] shadow-[0px_4px_4px_#00000040]"></div>
          <div className="w-3 h-[33px] bg-[#6cd3ff] rounded-[50px] shadow-[0px_4px_4px_#00000040]"></div>
          <div className="w-3 h-[18px] bg-[#6cd3ff] rounded-[50px] shadow-[0px_4px_4px_#00000040]"></div>

          <Button
            variant="ghost"
            size="icon"
            className="w-[33px] h-[33px] bg-white rounded-full p-0 ml-2"
          >
            <img
              src="public/icon.svg"
              alt="Alert icon"
              className="w-3.5 h-[21px]"
            />
          </Button>
        </div>
      </div>
    </Layout>
  );
};