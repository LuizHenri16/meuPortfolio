"use client";
import { Template, MySwiper } from "@/components";

export default function Skills() {
  return (
    <>
      <div className="w-[100%] flex flex-col justify-center ">
        <Template>
          <main className="w-[50%] m-auto">{<MySwiper />}</main>
        </Template>
      </div>
    </>
  );
}
