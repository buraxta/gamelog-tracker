"use server";

import prisma from "./db";

export const getAllPlayer = async () => {
  try {
    const players = await prisma.user.findMany({});
    // console.log(players);
    return players;
  } catch (error: any) {
    console.log("players couldn't get from db" + error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error: any) {
    console.log("user could'n get from db " + error);
  }
};

export const updateUser = async (userInfo) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: userInfo.id,
      },
      data: {
        name: userInfo.name,
        branch: userInfo.sports,
        teamNumber: +userInfo.jersey,
        numOfPlays: userInfo.plays,
      },
    });
    return user;
  } catch (error) {
    console.log("user couldn't updated " + error);
  }
};

export const createUser = async (userInfo) => {
  try {
    const createdUser = await prisma.user.create({
      data: {
        name: userInfo.name,
        branch: userInfo.sports,
        teamNumber: +userInfo.jersey,
        numOfPlays: userInfo.plays,
      },
    });
  } catch (error) {}
};

export const deleteUser = async (id: string) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return deletedUser;
  } catch (error) {
    console.log("user couldn't deleted ", error);
  }
};
