import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  // if (!userId) redirect("/sign-in");

  return (
    <div>
      <Header title={transformation.title} subTitle={transformation.subTitle} />
    </div>
  );
};

export default AddTransformationTypePage;
