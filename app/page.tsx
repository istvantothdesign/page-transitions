import Image from "next/image";
// All photos by Matt Perry https://citizenofnowhe.re
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import TextBlock from "./components/TextBlock";
import Link from "next/link";
import MaskTextBlock from "./components/MaskTextBlock";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <TextBlock>
        <MaskTextBlock />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eum repudiandae fugiat modi, ullam quam.
        </p>
      </TextBlock>
      <div className="w-[600px] h-screen flex items-center justify-center bg-red-300">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          itaque ea delectus est ex! Ducimus, perferendis molestiae minus
          expedita eius dolorem maxime omnis voluptate quibusdam accusamus
          aspernatur id cupiditate. Ad et natus consectetur cumque reiciendis
          suscipit aliquam vero placeat libero!
        </p>
      </div>
      <div className="w-[600px] h-screen flex items-center justify-center bg-yellow-300">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          itaque ea delectus est ex! Ducimus, perferendis molestiae minus
          expedita eius dolorem maxime omnis voluptate quibusdam accusamus
          aspernatur id cupiditate. Ad et natus consectetur cumque reiciendis
          suscipit aliquam vero placeat libero!
        </p>
      </div>
    </div>
  );
}
