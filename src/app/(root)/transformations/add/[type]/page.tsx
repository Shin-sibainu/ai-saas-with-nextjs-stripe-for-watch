import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddTransformationTypePage = ({
  params: { type },
}: {
  params: { type: keyof typeof transformationTypes };
}) => {
  // const { userId } = auth();
  const transformation = transformationTypes[type];

  // if (!userId) redirect("/sign-in");

  return (
    <div>
      <Header title={transformation.title} subTitle={transformation.subTitle} />
    </div>
  );
};

export default AddTransformationTypePage;
