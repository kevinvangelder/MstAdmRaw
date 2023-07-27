import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { UserModel } from "./UserModel"

export const UserStoreModel = types
  .model("UserStore")
  .props({
    user: types.optional(UserModel, {}),
  })
  .actions(withSetPropAction)
  

export interface UserStore extends Instance<typeof UserStoreModel> {}
export interface UserStoreSnapshot extends SnapshotOut<typeof UserStoreModel> {}
