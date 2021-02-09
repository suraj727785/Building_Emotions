/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      familyUser {
        items {
          id
          userID
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      diary {
        items {
          id
          userID
          name
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      todo {
        items {
          id
          userID
          name
          date
          time
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      medicine {
        items {
          id
          userID
          name
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      familyUser {
        items {
          id
          userID
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      diary {
        items {
          id
          userID
          name
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      todo {
        items {
          id
          userID
          name
          date
          time
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      medicine {
        items {
          id
          userID
          name
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      familyUser {
        items {
          id
          userID
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      diary {
        items {
          id
          userID
          name
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      todo {
        items {
          id
          userID
          name
          date
          time
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      medicine {
        items {
          id
          userID
          name
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFamilyUser = /* GraphQL */ `
  mutation CreateFamilyUser(
    $input: CreateFamilyUserInput!
    $condition: ModelFamilyUserConditionInput
  ) {
    createFamilyUser(input: $input, condition: $condition) {
      id
      userID
      familyID
      user {
        id
        name
        familyUser {
          nextToken
        }
        diary {
          nextToken
        }
        todo {
          nextToken
        }
        medicine {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFamilyUser = /* GraphQL */ `
  mutation UpdateFamilyUser(
    $input: UpdateFamilyUserInput!
    $condition: ModelFamilyUserConditionInput
  ) {
    updateFamilyUser(input: $input, condition: $condition) {
      id
      userID
      familyID
      user {
        id
        name
        familyUser {
          nextToken
        }
        diary {
          nextToken
        }
        todo {
          nextToken
        }
        medicine {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFamilyUser = /* GraphQL */ `
  mutation DeleteFamilyUser(
    $input: DeleteFamilyUserInput!
    $condition: ModelFamilyUserConditionInput
  ) {
    deleteFamilyUser(input: $input, condition: $condition) {
      id
      userID
      familyID
      user {
        id
        name
        familyUser {
          nextToken
        }
        diary {
          nextToken
        }
        todo {
          nextToken
        }
        medicine {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
      id
      familyUsers {
        items {
          id
          userID
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      healthReport {
        items {
          id
          userID
          familyID
          reportName
          reportImageUri
          createdAt
          updatedAt
        }
        nextToken
      }
      reciepe {
        items {
          id
          userID
          familyID
          reciepeName
          reciepeImageUri
          reciepeContent
          reciepeIngredient
          createdAt
          updatedAt
        }
        nextToken
      }
      result {
        items {
          id
          userID
          familyID
          resultName
          resultImageUri
          resultPercentage
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
      id
      familyUsers {
        items {
          id
          userID
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      healthReport {
        items {
          id
          userID
          familyID
          reportName
          reportImageUri
          createdAt
          updatedAt
        }
        nextToken
      }
      reciepe {
        items {
          id
          userID
          familyID
          reciepeName
          reciepeImageUri
          reciepeContent
          reciepeIngredient
          createdAt
          updatedAt
        }
        nextToken
      }
      result {
        items {
          id
          userID
          familyID
          resultName
          resultImageUri
          resultPercentage
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
      id
      familyUsers {
        items {
          id
          userID
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      healthReport {
        items {
          id
          userID
          familyID
          reportName
          reportImageUri
          createdAt
          updatedAt
        }
        nextToken
      }
      reciepe {
        items {
          id
          userID
          familyID
          reciepeName
          reciepeImageUri
          reciepeContent
          reciepeIngredient
          createdAt
          updatedAt
        }
        nextToken
      }
      result {
        items {
          id
          userID
          familyID
          resultName
          resultImageUri
          resultPercentage
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createHealthReport = /* GraphQL */ `
  mutation CreateHealthReport(
    $input: CreateHealthReportInput!
    $condition: ModelHealthReportConditionInput
  ) {
    createHealthReport(input: $input, condition: $condition) {
      id
      userID
      familyID
      reportName
      reportImageUri
      createdAt
      updatedAt
    }
  }
`;
export const updateHealthReport = /* GraphQL */ `
  mutation UpdateHealthReport(
    $input: UpdateHealthReportInput!
    $condition: ModelHealthReportConditionInput
  ) {
    updateHealthReport(input: $input, condition: $condition) {
      id
      userID
      familyID
      reportName
      reportImageUri
      createdAt
      updatedAt
    }
  }
`;
export const deleteHealthReport = /* GraphQL */ `
  mutation DeleteHealthReport(
    $input: DeleteHealthReportInput!
    $condition: ModelHealthReportConditionInput
  ) {
    deleteHealthReport(input: $input, condition: $condition) {
      id
      userID
      familyID
      reportName
      reportImageUri
      createdAt
      updatedAt
    }
  }
`;
export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
      id
      userID
      familyID
      resultName
      resultImageUri
      resultPercentage
      createdAt
      updatedAt
    }
  }
`;
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
      id
      userID
      familyID
      resultName
      resultImageUri
      resultPercentage
      createdAt
      updatedAt
    }
  }
`;
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
      id
      userID
      familyID
      resultName
      resultImageUri
      resultPercentage
      createdAt
      updatedAt
    }
  }
`;
export const createReciepe = /* GraphQL */ `
  mutation CreateReciepe(
    $input: CreateReciepeInput!
    $condition: ModelReciepeConditionInput
  ) {
    createReciepe(input: $input, condition: $condition) {
      id
      userID
      familyID
      reciepeName
      reciepeImageUri
      reciepeContent
      reciepeIngredient
      createdAt
      updatedAt
    }
  }
`;
export const updateReciepe = /* GraphQL */ `
  mutation UpdateReciepe(
    $input: UpdateReciepeInput!
    $condition: ModelReciepeConditionInput
  ) {
    updateReciepe(input: $input, condition: $condition) {
      id
      userID
      familyID
      reciepeName
      reciepeImageUri
      reciepeContent
      reciepeIngredient
      createdAt
      updatedAt
    }
  }
`;
export const deleteReciepe = /* GraphQL */ `
  mutation DeleteReciepe(
    $input: DeleteReciepeInput!
    $condition: ModelReciepeConditionInput
  ) {
    deleteReciepe(input: $input, condition: $condition) {
      id
      userID
      familyID
      reciepeName
      reciepeImageUri
      reciepeContent
      reciepeIngredient
      createdAt
      updatedAt
    }
  }
`;
export const createDiary = /* GraphQL */ `
  mutation CreateDiary(
    $input: CreateDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    createDiary(input: $input, condition: $condition) {
      id
      userID
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateDiary = /* GraphQL */ `
  mutation UpdateDiary(
    $input: UpdateDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    updateDiary(input: $input, condition: $condition) {
      id
      userID
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteDiary = /* GraphQL */ `
  mutation DeleteDiary(
    $input: DeleteDiaryInput!
    $condition: ModelDiaryConditionInput
  ) {
    deleteDiary(input: $input, condition: $condition) {
      id
      userID
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      userID
      name
      date
      time
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      userID
      name
      date
      time
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      userID
      name
      date
      time
      content
      createdAt
      updatedAt
    }
  }
`;
export const createMedicine = /* GraphQL */ `
  mutation CreateMedicine(
    $input: CreateMedicineInput!
    $condition: ModelMedicineConditionInput
  ) {
    createMedicine(input: $input, condition: $condition) {
      id
      userID
      name
      time
      createdAt
      updatedAt
    }
  }
`;
export const updateMedicine = /* GraphQL */ `
  mutation UpdateMedicine(
    $input: UpdateMedicineInput!
    $condition: ModelMedicineConditionInput
  ) {
    updateMedicine(input: $input, condition: $condition) {
      id
      userID
      name
      time
      createdAt
      updatedAt
    }
  }
`;
export const deleteMedicine = /* GraphQL */ `
  mutation DeleteMedicine(
    $input: DeleteMedicineInput!
    $condition: ModelMedicineConditionInput
  ) {
    deleteMedicine(input: $input, condition: $condition) {
      id
      userID
      name
      time
      createdAt
      updatedAt
    }
  }
`;
