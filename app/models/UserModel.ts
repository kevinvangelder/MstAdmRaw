import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const UserModel = types
  .model("User")
  .props({
    firstName: types.maybe(types.string),
    lastName: types.maybe(types.string),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get name() {
      return `${self.firstName} ${self.lastName}`
    },
  }))
  

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshot extends SnapshotOut<typeof UserModel> {}
