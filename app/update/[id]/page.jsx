import FormComp from "@/components/form";
import HeaderComp from "@/components/header";
import { Button } from "@/components/ui/button";
import { getUserById } from "@/lib/actions";

import React from "react";

const UpdatePage = async ({ params }) => {
  const user = await getUserById(params.id);
  // console.log(user);
  return (
    <FormComp
      header={
        <HeaderComp
          title="Update Player"
          subtitle="Change the form below to update a player"
          id={params.id}
        />
      }
      buttonText={"Update"}
      user={user}
    />
  );
};

export default UpdatePage;
