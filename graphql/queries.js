/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFamilyUser = /* GraphQL */ `
  query GetFamilyUser($id: ID!) {
    getFamilyUser(id: $id) {
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
export const listFamilyUsers = /* GraphQL */ `
  query ListFamilyUsers(
    $filter: ModelFamilyUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilyUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        familyID
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
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
export const listFamilys = /* GraphQL */ `
  query ListFamilys(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        familyUsers {
          nextToken
        }
        healthReport {
          nextToken
        }
        reciepe {
          nextToken
        }
        result {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHealthReport = /* GraphQL */ `
  query GetHealthReport($id: ID!) {
    getHealthReport(id: $id) {
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
export const listHealthReports = /* GraphQL */ `
  query ListHealthReports(
    $filter: ModelHealthReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHealthReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
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
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getReciepe = /* GraphQL */ `
  query GetReciepe($id: ID!) {
    getReciepe(id: $id) {
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
export const listReciepes = /* GraphQL */ `
  query ListReciepes(
    $filter: ModelReciepeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReciepes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getDiary = /* GraphQL */ `
  query GetDiary($id: ID!) {
    getDiary(id: $id) {
      id
      userID
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const listDiarys = /* GraphQL */ `
  query ListDiarys(
    $filter: ModelDiaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getMedicine = /* GraphQL */ `
  query GetMedicine($id: ID!) {
    getMedicine(id: $id) {
      id
      userID
      name
      time
      createdAt
      updatedAt
    }
  }
`;
export const listMedicines = /* GraphQL */ `
  query ListMedicines(
    $filter: ModelMedicineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicines(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
