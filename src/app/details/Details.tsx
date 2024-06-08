"use client";
import React from "react";
import "../../styles/details.css";

const Details = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex gap-5 justify-between py-3.5 pr-14 pl-6 w-full text-lg bg-orange-50 text-stone-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/images/wasong-logo.png"
          className="shrink-0 max-w-full w-[126px]"
        />
        <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="grow">Home</div>
          <div className="font-bold">Classes</div>
          <div className="flex-auto">Assignments</div>
          <div className="text-center capitalize text-neutral-950">
            My Profile
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-14 w-full max-w-[1425px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 self-start text-5xl font-bold text-zinc-800 max-md:flex-wrap max-md:text-4xl">
          <img
            loading="lazy"
            src="/images/Vector.png"
            className="shrink-0 w-7 aspect-[0.68] fill-zinc-800"
          />
          <div className="flex-auto max-md:text-4xl">Back to Classes</div>
        </div>
        <div className="mt-14 w-full max-w-[1174px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/images/best-acoustic-guitars-1.png"
                className="grow w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-14 pt-11 pb-16 w-full font-bold bg-white rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-zinc-800 max-md:max-w-full max-md:text-4xl">
                  Acoustic Guitar
                </div>
                <div className="flex gap-5 mt-12 text-3xl text-neutral-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div>
                    Date
                    <br />
                    Time{" "}
                  </div>
                  <div className="flex-auto">
                    : Monday & Thursday
                    <br />: 13.00 - 14.30
                  </div>
                </div>
                <div className="justify-center self-center p-2.5 mt-16 text-2xl text-black whitespace-nowrap rounded-lg border-4 border-black border-solid max-md:px-5 max-md:mt-10">
                  ENROLL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 w-full max-w-[1333px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="justify-center items-start self-stretch px-7 py-11 my-auto w-full text-3xl font-bold bg-white rounded-2xl shadow-lg text-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                Master Degree in Musical Education
                <br />
                Music Festival Champion I<br />
                Music Festival Champion II
                <br />
                Music Festival Champion III
                <br />
                Music Festival Champion IV
                <br />
                Music Festival Champion V<br />
                Music Festival Champion VI
                <br />
                Music Festival Champion VII
                <br />
                Music Festival Champion VIII
                <br />
                Music Festival Champion IX
                <br />
                <br />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-3xl font-bold text-center text-zinc-800 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="/images/ellipse-13.png"
                  className="w-full rounded-full aspect-[1.02]"
                />
                <div className="self-center mt-10">
                  Teacher
                  <br />
                  Ms. Laykeen Tialauren
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d53396b22f16f724724f4372627933a90c8ff8bf7163276c656c06cf5bbc5dd?"
          className="mt-14 w-3.5 aspect-[0.83] fill-white max-md:mt-10"
        />
      </div>
      <div className="justify-center items-center px-16 py-14 w-full text-7xl italic font-bold bg-orange-50 text-zinc-800 max-md:px-5 max-md:max-w-full max-md:text-4xl">
        Your Music Journey Starts Here!
      </div>
    </div>
  );
}
  
export default Details;