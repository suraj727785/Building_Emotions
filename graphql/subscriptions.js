/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFamilyUser = /* GraphQL */ `
  subscription OnCreateFamilyUser {
    onCreateFamilyUser {
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
export const onUpdateFamilyUser = /* GraphQL */ `
  subscription OnUpdateFamilyUser {
    onUpdateFamilyUser {
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
export const onDeleteFamilyUser = /* GraphQL */ `
  subscription OnDeleteFamilyUser {
    onDeleteFamilyUser {
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
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily {
    onUpdateFamily {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily {
    onDeleteFamily {
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
export const onCreateHealthReport = /* GraphQL */ `
  subscription OnCreateHealthReport {
    onCreateHealthReport {
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
export const onUpdateHealthReport = /* GraphQL */ `
  subscription OnUpdateHealthReport {
    onUpdateHealthReport {
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
export const onDeleteHealthReport = /* GraphQL */ `
  subscription OnDeleteHealthReport {
    onDeleteHealthReport {
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
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult {
    onCreateResult {
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
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult {
    onUpdateResult {
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
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult {
    onDeleteResult {
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
export const onCreateReciepe = /* GraphQL */ `
  subscription OnCreateReciepe {
    onCreateReciepe {
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
export const onUpdateReciepe = /* GraphQL */ `
  subscription OnUpdateReciepe {
    onUpdateReciepe {
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
export const onDeleteReciepe = /* GraphQL */ `
  subscription OnDeleteReciepe {
    onDeleteReciepe {
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
export const onCreateDiary = /* GraphQL */ `
  subscription OnCreateDiary {
    onCreateDiary {
      id
      userID
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDiary = /* GraphQL */ `
  subscription OnUpdateDiary {
    onUpdateDiary {
      id
      userID
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDiary = /* GraphQL */ `
  subscription OnDeleteDiary {
    onDeleteDiary {
      id
      userID
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateMedicine = /* GraphQL */ `
  subscription OnCreateMedicine {
    onCreateMedicine {
      id
      userID
      name
      time
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMedicine = /* GraphQL */ `
  subscription OnUpdateMedicine {
    onUpdateMedicine {
      id
      userID
      name
      time
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMedicine = /* GraphQL */ `
  subscription OnDeleteMedicine {
    onDeleteMedicine {
      id
      userID
      name
      time
      createdAt
      updatedAt
    }
  }
`;
