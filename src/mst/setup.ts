import { onSnapshot } from "mobx-state-tree";
import { RootModel } from ".";

export const setupRootStore = () => {
  const rootTree = RootModel.create({
    employer: {
      id: "1",
      name: "Bob's Burgets",
      location: "New York, NY",
      employees: [],
    },
  });
  onSnapshot(rootTree, (snapshot) => console.log("snapshot", snapshot));
  return { rootTree };
};
