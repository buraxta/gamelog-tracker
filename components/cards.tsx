import React from "react";
import CardComp from "./card";
import Link from "next/link";

const CardsComp = ({ users }) => {
  // console.log(users[0].name);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 sm:ml-5 lg:ml-0  ">
      {users.map((user) => (
        <Link href={`/update/${user.id}`} key={user.name}>
          <CardComp
            name={user.name}
            branch={user.branch}
            teamNumber={user.teamNumber}
            numOfPlays={user.numOfPlays}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardsComp;
