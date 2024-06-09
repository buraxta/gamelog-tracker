import FormComp from "@/components/form";
import HeaderComp from "@/components/header";
import React from "react";

const CreatePage = () => {
  return (
    <FormComp
      header={
        <HeaderComp
          title="Create Player"
          subtitle="Fill out the form below to add a player"
        />
      }
      buttonText={"Create"}
    />
  );
};

export default CreatePage;
